# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Environment

- Node.js **22** (see `.nvmrc`). Switch with `fnm use 22` if needed.
- Root library dev: Node 16.20+ / npm 8.19+.
- Expo example: Node **22.13+** recommended (SDK 58 minimum).
- **Expo HAS CHANGED.** Read the exact versioned docs at https://docs.expo.dev/versions/v58.0.0/ before writing any Expo-related code. The `example/` app uses Expo SDK 58 (`expo@~58.0.26`, React Native 0.88.x).

## Commands

```bash
# Install dependencies (root)
npm install

# Lint & typecheck
npm run lint              # tslint + srclint + applint
npm run tsc               # TypeScript check (no emit)

# Tests
npm run test              # Jest
npm run test:all          # full test suite (pre-publish)
npm run test -- -u        # update snapshots
npm run test -- components/button/__tests__/index.test.js -t 'pressIn'  # single test

# Build library (outputs lib/ and es/ — do not edit those by hand)
npm run compile
npm run clean
npm run pub               # publish via antd-tools

# Documentation site (dumi)
npm start                 # dev server on PORT=8003
npm run deploy            # build + gh-pages

# React Native CLI demo (rn-kitchen-sink)
cd rn-kitchen-sink/ios && pod install   # iOS first time
npm run ios               # watch-tsc + run-ios
npm run android           # watch-tsc + run-android
npm run watch-tsc         # TypeScript watch only

# Expo demo (example/) — preferred for quick component preview
cd example
yarn install              # sync peer deps to Expo SDK
npm start                 # expo start
npm run ios               # expo start --ios
npm run android           # expo start --android
npm run web               # expo start --web
```

## Architecture

### Monorepo layout

Published npm package: **`@ant-design/react-native`**. Source lives under `components/`; build artifacts go to `lib/` (CJS) and `es/` (ESM). **Never edit `lib/` or `es/` directly** — change `components/` and run `npm run compile`.

```text
components/           # All UI components (single source of truth)
├── index.tsx         # Public exports
├── <name>/
│   ├── index.tsx     # Component entry
│   ├── PropsType.tsx # Props (when needed)
│   ├── style/        # Styles
│   ├── demo/         # Demo for docs & kitchen-sink
│   ├── locale/       # i18n strings
│   └── __tests__/    # Jest tests + snapshots
├── _util/            # Shared utilities
├── locale-provider/  # Global locale
└── provider/         # Theme Provider

example/              # Expo SDK 58 demo (expo-router)
rn-kitchen-sink/      # React Native CLI demo app
.dumi/                # Dumi doc site theme & pages
site/                 # Site assets
scripts/              # Dev / build scripts
tests/                # Shared test helpers
```

### Local development resolution

During development, `@ant-design/react-native` resolves to **`components/`**, not `lib/`:

- **TypeScript** (`tsconfig.json` paths): `@ant-design/react-native` → `./components/index.tsx`
- **Expo Metro** (`example/metro.config.js`): same alias for the example app
- **Root Metro** (`metro.config.js`): used by rn-kitchen-sink workflow

After changing components, the Expo app picks up changes via Metro; for the CLI app, `npm run watch-tsc` keeps types in sync.

### Component conventions

1. **API design**: Stay close to React Native primitives; for patterns RN lacks, follow [Ant Design](https://ant.design/) conventions. New paradigms should be discussed in an issue first.
2. **Naming**: Component folders use **kebab-case** (`date-picker`); implementation files use **`.tsx`**.
3. **Implementation**: Prefer [react-component](https://github.com/react-component/) where applicable; extract complex logic there when reusable.
4. **Demos**: Place under `components/<name>/demo/`. Export `title`, `description`, and `demo` for kitchen-sink integration.
5. **Docs**: Each component has `index.zh-CN.md` / `index.en-US.md` beside the source; rendered by **dumi** (`npm start`).
6. **Platform**: Generally no Android/iOS file suffix unless platform-specific behavior is required (see `components/input/TextArea/` for an exception).

### Key dependencies

| Area | Packages |
|------|----------|
| Forms | `rc-field-form`, `rc-util` |
| Lists | `@bang88/react-native-ultimate-listview` |
| Overlays | `react-native-modal-popover`, `@floating-ui/react-native` |
| Peer (app) | `react`, `react-native`, `@ant-design/icons-react-native`, `react-native-gesture-handler`, `react-native-reanimated`, `react-native-worklets` |

Install peers in Expo apps with `npx expo install <package>` so versions match the SDK.

### Adding or updating a component

1. Implement in `components/<component-name>/` (index, style, PropsType as needed).
2. Export from `components/index.tsx`.
3. Add `demo/basic.tsx` (and `.md` if needed for dumi).
4. Add `__tests__/` with Jest; run `npm run test`.
5. Register in **`rn-kitchen-sink/demoList.js`** and ensure `./index.js` exports if required (CLI demo).
6. For Expo demo routes, add under `example/app/` as needed (expo-router file-based routing).
7. Add or update `index.zh-CN.md` / `index.en-US.md` documentation.

## Pull requests

- Branch from `master`: `git checkout -b xx-feature`
- Run `npm run lint` and `npm run test:all` before submitting
- Rebase on `master` before push; open PR and request review

## References

- Human-readable dev guide: `development.en-US.md` / `development.zh-CN.md`
- Official site: http://rn.mobile.ant.design
