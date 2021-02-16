import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  

//   const pro =()=>{
//     var prod ={};
//     repos.products.forEach(element => {
//           prod.push(prod)
//       });

//       return prod;
//   }

  return (
      <div>
          {console.log(repos.stores)}
          <h1>{repos.stores.name}</h1>
          <h1>{repos.products[1].product_name}</h1>
          <ul>
              {/* {
                Object.keys(repos.products[2]).forEach(element=>{
                  console.log(element.products)
                })
              } */}
            {
              Object.assign([],repos.products).map(i=>{
                // console.log(i.product_name)
                return(
                  <li key={i.product_id}>{i.product_name}</li>
                )
              })
            }
          </ul>
          
      </div>
    // <ul>
    //   <h2 className='list-head'>Available Public Repositories</h2>
    //   {repos.map((repo) => {
    //     return (
    //       <li key={repo.id} className='list'>
    //         <span className='repo-text'>{repo.product_id} </span>
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};
export default List;
