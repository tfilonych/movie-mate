import { ComponentType } from 'react';

const withHorizontalLayout = <T,>(WrappedComponent: ComponentType<T>) => {
  return function WithHorizontalLayout(props: T) {
    return (
      <div className="flex overflow-x-auto space-x-4">
        <WrappedComponent {...props} itemClassName="flex-none w-64" />
      </div>
    );
  };
};

export default withHorizontalLayout;
