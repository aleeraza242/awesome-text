# Awesome Text

An enhanced React Native Text component with custom styling capabilities.

## Installation

```bash
npm install awesome-text
# or
yarn add awesome-text
```

## Features

- Predefined text variants (h1, h2, h3, body, caption)
- Customizable text color
- Font weight options (normal, bold, light)
- Text alignment options
- Custom style support
- TypeScript support

## Usage

```jsx
import AwesomeText from 'awesome-text';

// Basic usage
<AwesomeText>Hello World</AwesomeText>

// With variant
<AwesomeText variant="h1">Heading 1</AwesomeText>

// With custom color and weight
<AwesomeText color="#FF0000" weight="bold">Bold Red Text</AwesomeText>

// With alignment
<AwesomeText align="center">Centered Text</AwesomeText>

// With custom style
<AwesomeText customStyle={{ letterSpacing: 2 }}>Custom Styled Text</AwesomeText>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'h1' \| 'h2' \| 'h3' \| 'body' \| 'caption' | 'body' | Text variant |
| color | string | '#000000' | Text color |
| weight | 'normal' \| 'bold' \| 'light' | 'normal' | Font weight |
| align | 'left' \| 'center' \| 'right' | 'left' | Text alignment |
| customStyle | object | undefined | Additional custom styles |

## License

MIT 