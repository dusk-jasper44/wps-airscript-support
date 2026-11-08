import json, urllib.request, os, sys

URL = "https://open.wps.cn/docs/api/collections/guide"
OUT = "tools/guide-site.json"
UA = {"User-Agent": "Mozilla/5.0"}

def fetch():
    req = urllib.request.Request(URL, headers=UA)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))

if os.path.exists(OUT):
    data = json.load(open(OUT, encoding="utf-8"))
else:
    data = fetch()
    json.dump(data, open(OUT, "w", encoding="utf-8"), ensure_ascii=False)

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
local_api = {p for p in local if "/guide/dbsheet/Api/" in p}
missing = [p for p in api if p not in local]
extra = sorted(local_api - set(api))
print("site files:", len(paths), "site api pages:", len(api))
print("local api pages:", len(local_api))
print("MISSING IN LOCAL:", len(missing))
for p in missing: print("  +", p)
print("LOCAL NOT ON SITE:", len(extra))
for p in extra[:40]: print("  -", p)
