import React,{Component} from "react";
import {gql} from 'apollo-boost'
import { Query } from "react-apollo";




const getMessage = gql`
    query getMessage{
        getMessage{
            _id
            name
            phone
            email
            offer
            resDate
            subject
            message
            date
        }
    }
`;


class App extends Component {

    constructor(props) {
        super(props);

    }

    user = ( ) => (
        <Query query={getMessage}>
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;

                return (
                    <div>
                        {
                            console.log(data)
                        }
                    </div>

                );
            }}
        </Query>
    );

    render(){
        return (
            <div>
                <p> hello world</p>
                {
                    this.user()
                }
            </div>

        )
  }
}
export default App
