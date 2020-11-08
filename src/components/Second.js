import React from 'react';
import SearchInput from './SearchInput';
import ShowDetails from './ShowDetails';

function Second(props){
    const { keyword, data } = props.location.state;
    console.log(data);


    return (
        <div className="second">
            <SearchInput/>
            <h2>{keyword}</h2>
            <div className="results">
                {data.results.map((result, index) => {
                    return (
                        <div key={index} className="photo">
                            <ShowDetails result={result}/>
                        </div>         
                    )                  
                })}
            </div>    
        </div>
    )
}

export default Second;