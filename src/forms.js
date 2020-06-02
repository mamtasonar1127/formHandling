import React from 'react'

export default class Forms extends React.Component{

    constructor()
    {
        super()
        this.state= {
            user:null,
            password:null

        }
    }

    render()
    {
        return(
            <div>
               <h1>Form Handling</h1> 
               <input type="text" name="user"/>
               <br /><br />
               <input type="password" name="password"/>
               <br /><br />
               <button >Submit</button>

            </div>
        )
    }
        
}
