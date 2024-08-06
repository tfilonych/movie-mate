import { ComponentType } from 'react';

const withVerticalLayout = <T,>(WrappedComponent: ComponentType<T>) => {
  return function WithVerticalLayout(props: T) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withVerticalLayout;