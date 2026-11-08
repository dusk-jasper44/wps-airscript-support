import requests, json, re, os, time

H = {'User-Agent': 'Mozilla/5.0', 'Referer': 'https://open.wps.cn/'}
BASE = 'https://open-docs.wpscdn.cn/docs-md/zh/'
OUT = 'airscript_docs'
os.makedirs(OUT, exist_ok=True)

r = requests.get('https://open.wps.cn/docs/api/collections/guide', headers=H, timeout=30)
tree = r.json()['data']

pages = []
def walk(items, path_titles=()):
    for it in items:
        p = it.get('path', '')
        if it.get('type') == 'file' and '/dbsheet/' in p:
            pages.append({'title': it.get('name'), 'path': p})
        walk(it.get('items', []), path_titles + (it.get('name'),))

walk(tree.get('items', []))
print('dbsheet 页面数:', len(pages))

ok, fail = 0, []
for p in pages:
    url = BASE + p['path'].lstrip('/') + '.md'
    try:
        rr = requests.get(url, headers=H, timeout=20)
        if rr.status_code == 200 and len(rr.text) > 10:
            fn = p['path'].strip('/').replace('/', '__') + '.md'
            with open(os.path.join(OUT, fn), 'w', encoding='utf-8') as f:
                f.write('# ' + p['title'] + '\n\n' + rr.text)
            ok += 1
        else:
            fail.append((p['path'], rr.status_code))
        time.sleep(0.15)
    except Exception as e:
        fail.append((p['path'], str(e)))

print('成功:', ok, '失败:', len(fail))
for f in fail[:20]:
    print('FAIL', f)
json.dump(pages, open('pages.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
