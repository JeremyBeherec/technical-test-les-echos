import clsx from 'clsx';

export const Heading = ({ variant: BaseHeading, className, children, ...rest }: TypographyProps) => {
  <BaseHeading
    {...rest}
    className={clsx('text-3xl font-bold uppercase mb-4', className)}
  >
    {children}
  </BaseHeading>
}

export interface TypographyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
