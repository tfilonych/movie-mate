import { ComponentType } from 'react';

const withVerticalLayout = <T,>(WrappedComponent: ComponentType<T>) => {
  return function WithVerticalLayout(props: T) {
    return (
      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <WrappedComponent {...props} itemClassName="flex-none" />
      </div>
    );
  };
};

export default withVerticalLayout;
