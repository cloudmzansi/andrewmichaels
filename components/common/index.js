// Base Components
export {
  BaseComponent,
  BaseComponentProps,
  generateAnimationData,
  generateClassName,
  generateButtonProps,
  generateImageProps,
  generateSectionProps,
  generateContainerProps,
  generateHeadingProps,
  generateTextProps,
  generateIconProps,
  ComponentErrorBoundary,
  LoadingComponent,
  EmptyStateComponent,
} from './BaseComponent';

// Section Components
export {
  Section,
  Container,
  SectionHeader,
  SectionContent,
  SectionOuter,
  Row,
  Column,
} from './Section';

// UI Components
export {
  Button,
  Image,
  Heading,
  Text,
  Icon,
  Card,
  Badge,
} from './UI';

// Form Components
export {
  Form,
  FormGroup,
  Input,
  Textarea,
  Select,
  Label,
  Checkbox,
  Radio,
  useFormValidation,
} from './Form';

// Re-export existing components for backward compatibility
export { default as Accordion } from './Accordion';
