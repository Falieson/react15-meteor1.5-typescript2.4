# TypeScript Configuration

## Compiler Option Annotations

### "allowJs": false

### "allowSyntheticDefaultImports": false
```
// BAD
import React from 'react
```

```
// GOOD
import * as React from 'react
```

**TODO: Setting allowSyntheticDefaultImports to true**
this requires additional configuration

```
allowSyntheticDefaultImports does not change the output. All what allowSyntheticDefaultImports is tells the compiler that at runtime your loader (e.g. SystemJs) will perform this operation of mapping modules to default imports, and thus avoids the error at build time.
```

### "jsx": "react"

### "sourceMap": true

### "strict": true

### "moduleResolution": "node"

### "experimentalDecorators": true

### "module": "commonjs"

### "target": "es5"

### "pretty": true
