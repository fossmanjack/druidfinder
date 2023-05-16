## Front end

- [x] Render map
- [x] Render list of groves
- [ ] Render grove card
- [ ] Render search bar
- [ ] Accept search bar input
- [ ] Filter based on search bar input
- [ ] Implement filters
- [ ] Grove info modal
- [ ] Clickable map markers (clicking brings up modal)
- [ ] Clickable add-a-grove form
- [ ] Header
- [ ] Footer

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
