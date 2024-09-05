import { ComponentType } from 'react';

const withVerticalLayout = <T,>(WrappedComponent: ComponentType<T>) => {
  return function WithVerticalLayout(props: T) {
    return (
      <div className="flex flex-wrap items-start justify-center gap-4">
        <WrappedComponent {...props} itemClassName="flex-none" />
      </div>
    );
  };
};

export default withVerticalLayout;
