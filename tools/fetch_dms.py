import json, os, time, urllib.request, urllib.error

data = json.load(open("tools/guide-site.json", encoding="utf-8"))
nodes = []
def walk(items):
    for it in items:
        if it.get("type") == "file" and it.get("path") and "/guide/dbsheet/Api/" in it["path"]:
            nodes.append(it)
        for ch in it.get("children") or []:
            walk([ch])
walk(data["data"]["items"])

local = set()
for fn in os.listdir("docs"):
    if fn.endswith(".md") and fn.startswith("app-integration-dev__"):
        local.add("/" + fn[:-3].replace("__", "/"))

missing = [n for n in nodes if n["path"] not in local]
print("missing", len(missing))
for n in missing:
    p = n["path"]; di = n.get("docInfo") or {}; did = di.get("id")
    fn = os.path.join("docs", p.strip("/").replace("/", "__") + ".md")
    if os.path.exists(fn) and os.path.getsize(fn) > 0:
        continue
    if not did:
        print("NOID", p); continue
    u = "https://open.wps.cn/docs/api/doc/%s?lang=zh&source=dms" % did
    req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0", "Referer": "https://open.wps.cn/documents/"})
    try:
        r = urllib.request.urlopen(req, timeout=30)
        obj = json.loads(r.read().decode("utf-8"))
        content = obj["data"].get("content") or ""
        open(fn, "w", encoding="utf-8", newline="\n").write(content)
        title = content.splitlines()[0] if content else "(empty)"
        print("OK", did, p, "|", title[:80])
    except Exception as e:
        print("FAIL", did, p, e)
    time.sleep(0.15)
