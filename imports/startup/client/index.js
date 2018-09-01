
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo';
import App from '../../ui/App'
import buildGraphQLProvider  from 'ra-data-graphql-simple';
// http link

const client = new ApolloClient({
    uri: Meteor.absoluteUrl('graphql'),
    request: operation =>
        operation.setContext(() => ({
            headers: {
                authorization: Accounts._storedLoginToken()
            }
        }))
});




Meteor.startup(() => {

    buildGraphQLProvider({ client:client }).then(data =>
        render(

            <BrowserRouter>

                <Switch>
                    <Route path={'/admin'} render={() =>
                        <AdminIndex data={data}/>
                    }/>
                    <Route render={() =>
                        <ApolloProvider client={client}>
                            <App  client={client}/>
                        </ApolloProvider>
                    }/>
                </Switch>
            </BrowserRouter>


            ,
            document.getElementById('app')
        )

    );
    ;
});
