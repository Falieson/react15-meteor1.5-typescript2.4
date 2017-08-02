import * as React from 'react'

export default function Root(
  initStore?: object | undefined,
  renderRoutes?: object | undefined,
  children?: React.ReactNode,
): React.ReactElement<{}> {
  // if(renderRoutes){
  //   return (
  //     <div className="root-container">
  //       <Provider store={initStore()}>
  //         {renderRoutes()}
  //       </Provider>
  //     </div>
  //   );
  // }
  const isChildren: boolean = children === null
  const isInitStore: boolean = initStore === null
  if (isChildren && !isInitStore) {
    return (
      <div className='root-container'>
        {children}
      </div>
    )
  }

  const ErrorComponent = (
    <div className='root-container'>
      {children}
    </div>
  )

  return ErrorComponent
}
