import cn from 'clsx';
import { CustomIcon } from '../Icons/custom-icon';
import { JSX } from 'react/jsx-runtime';

type LoadingProps = {
  className?: string;
  iconClassName?: string;
};

export function Loading({
  className,
  iconClassName
}: LoadingProps): JSX.Element {
  return (
    <i className={cn('flex justify-center', className ?? 'p-4')}>
      <CustomIcon
        className={cn('text-main-accent', iconClassName ?? 'h-7 w-7')}
        iconName='SpinnerIcon'
      />
    </i>
  );
}