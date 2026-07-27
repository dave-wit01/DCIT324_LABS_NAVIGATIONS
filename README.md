# Campus Connect (Expo Router)

Navigation lab implementation using **Expo Router** (Option B), with route groups expressing the required nesting.

## Setup

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go, or press `i` / `a` for simulator.

## Structure -> Requirement mapping

```
app/
  index.js                 -> redirects to /welcome (app entry)
  _layout.js                -> ROOT STACK
  welcome.js                 -> Welcome screen
  edit-profile.js             -> EditProfile (pushed on top of everything)
  (drawer)/
    _layout.js                -> DRAWER NAVIGATOR ("Main")
    announcements.js
    about.js
    help.js
    (tabs)/
      _layout.js               -> BOTTOM TAB NAVIGATOR ("Dashboard", drawer default)
      courses.js
      timetable.js
      profile.js                -> has "Edit Profile" button -> pushes /edit-profile
      home/
        _layout.js               -> NESTED STACK (inside Home tab)
        index.js                  -> Feed (tappable list)
        [id].js                   -> EventDetails (reads id via useLocalSearchParams)
```

## State sharing (Profile <-> EditProfile)

`contexts/ProfileContext.js` holds the profile object in React Context, provided at
the root layout. `edit-profile.js` updates it and calls `router.back()`;
`profile.js` re-renders automatically with the new values since it reads from
the same context - satisfying "Edit Profile updates and reflects changes on
Profile screen" without manually passing params back.

## Route params example

Tapping a Feed item pushes `/(drawer)/(tabs)/home/<id>`. `[id].js` reads the
`id` param with `useLocalSearchParams()` and looks up the matching dummy event
to display title, date, and description - satisfying the "at least one
screen passes data via route params" requirement.

## Checklist

- [x] All 10 screens implemented and reachable via navigation
- [x] Drawer, Tabs, and Stack all present and correctly nested
- [x] Route params used (Feed -> EventDetails)
- [x] Edit Profile updates and reflects on Profile screen
- [x] No styling beyond plain text/buttons, per lab instructions
