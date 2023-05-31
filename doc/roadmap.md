## Front end

- [x] Render map
- [x] Render list of groves
- [x] Render grove card
- [x] Render search bar
- [x] Accept search bar input
- [x] Filter based on search bar input
- [x] Implement filters
- [ ] Grove info modal
- [ ] Clickable map markers (clicking brings up modal)
- [ ] Clickable add-a-grove form
- [ ] Header
- [ ] Footer
- [ ] SVGs for each org
- [ ] Capture user location to populate initial myData

## Back end

- [ ] Express returns dummy data
- [ ] MongoDB containing dummy data
- [ ] Express returns data from DB
- [ ] Restrict Express calls to localhost
- [ ] Admin page (accessible only from localhost via ssh tunneling)

## Notes

- Grove coordinates should be stored in the DB, not dynamically generated each call, since they don't really change
- Inputting a new grove into the DB via the admin form should auto-generate those coordinates
- Security needs should be minimal if calls are limited to localhost, right?
- All of these data are public anyway, only the POST/PUT/DELETE verbs need restriction
- "Loading" spinner for the list pane until the list is retrieved
- Grove list should be an accordion with basic info in the header and click-to-expand to see the full detail

## Redux

- Redux should fetch and hold the grove and druid lists using thunks
- Redux should also hold current location data
- Redux should also hold filtered lists of both of those in an array [ dataOb, distance ]
