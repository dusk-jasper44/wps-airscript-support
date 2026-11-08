import json, os, time, urllib.request, urllib.error, sys

data = json.load(open("tools/guide-site.json", encoding="utf-8"))
paths = []
def walk(items):
    for it in items:
        if it.get("type") == "file" and it.get("path"):
            paths.append(it["path"])
        for ch in it.get("children") or []:
            walk([ch])
walk(data["data"]["items"])
api = sorted({p for p in paths if "/guide/dbsheet/Api/" in p})
local = set()
for fn in os.listdir("docs"):
    if fn.endswith(".md") and fn.startswith("app-integration-dev__"):
        local.add("/" + fn[:-3].replace("__", "/"))
missing = [p for p in api if p not in local]
print("missing:", len(missing))
ok = fail = 0
for p in missing:
    fn = os.path.join("docs", p.strip("/").replace("/", "__") + ".md")
    if os.path.exists(fn) and os.path.getsize(fn) > 0:
        ok += 1
        continue
    url = "https://open-docs.wpscdn.cn/docs-md/zh" + p + ".md"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as r:
            body = r.read()
        open(fn, "wb").write(body)
        ok += 1
        print("OK ", p, len(body))
    except Exception as e:
        fail += 1
        print("FAIL", p, e)
    time.sleep(0.1)
print("done ok=%d fail=%d" % (ok, fail))
