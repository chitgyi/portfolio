import React from 'react'
import { SideBar } from './SideBar';
import { ContentLayout } from './content.layout';
import { routes } from './../../router'
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";

export const AppLayout = () => {
    return (
        <div className="h-screen w-screen bg-background text-white flex">
            <Router>
                <>
                    <SideBar />
                    <ContentLayout >
                        <Switch>
                            {routes.map((item, index) => (
                                <Route exact path={item.path} key={index} component={item.component} />
                            ))}
                        </Switch>
                    </ContentLayout>
                </>
            </Router>
        </div>
    )
}
