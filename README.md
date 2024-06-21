# awww

A collection of utility functions to share across projects.

## Installation

```
npm install awww
```

## Packages:


### `awww/id`:

ID package for generating stable IDs at runtime. Cryptographically **insecure** and no collision protection so really made for things that are not meant to be unique or when you need a quick
id (e.g. an application invite code).

#### Declarations:

```ts
declare function id(length?: number, alphabet?: string): string;
```

#### Example usage:

```ts
import { id } from 'awww/id';

const randomId = id();
const randomHex = id(6, 'abcdefg01234567890');
const randomCode = id(10);
```

---


### `awww/prettier`:

Opinionated prettier config I use across my applications. You can use it by making a `.prettierrc` file in your project and including the following content:

```prettierrc
"awww/prettier"
```
