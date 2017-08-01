import * as React from 'react'

export default function Root(initStore, renderRoutes, children) {
  // if(renderRoutes){
  //   return (
  //     <div className="root-container">
  //       <Provider store={initStore()}>
  //         {renderRoutes()}
  //       </Provider>
  //     </div>
  //   );
  // }
  if(children && !initStore){
    return (
      <div className="root-container">
        {children}
      </div>
    )
  }
}
