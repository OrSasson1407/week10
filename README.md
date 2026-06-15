## Recent Architectural Improvements

To improve the maintainability, scalability, and developer experience of this project, the following architectural refactoring was implemented:

1. **Data Consolidation**: Removed the redundant `src/app/data/` folder. All dummy data is now strictly maintained in the `src/data/` directory to enforce a single source of truth and prevent routing conflicts in Expo Router.
2. **Style Co-location**: Shifted from separated stylesheet files (e.g., `Card.styles.js`) to co-located `StyleSheet` objects within the component files. This aligns with React Native best practices, keeping component logic and presentation unified.
3. **Component Extraction**: Extracted the `SafeAreaView` header from the main `_layout.js` tab navigation into its own reusable `<Header />` component. This keeps layout files clean and focused strictly on navigation logic.
4. **TypeScript Migration Initiation**: Began migrating `.js` components to `.tsx` (TypeScript), starting with `Card.tsx`, to introduce static typing, prop validation, and better editor intellisense.
5. **Absolute Path Aliases**: Configured `tsconfig.json` to support absolute imports (`@/*` mapping to `src/*`). This eliminates "relative path hell" (e.g., `../../`) and makes importing files cleaner and refactor-safe.