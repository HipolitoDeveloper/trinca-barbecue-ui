import BarbecueDetailsPage from '@modules/barbecue/barbecue_details/BarbecueDetails.page';
import BarbecuesPage from '@modules/barbecue/barbecues/Barbecues.page';
import LoginPage from '@modules/session/login/login.page';
import {Route, Routes as NavRoutes} from 'react-router-dom';
import AuthorizedRoutes from "@routes/AuthorizedRoutes";

const Routes = () => {
    return (
        <NavRoutes>
            <Route path="/" element={<LoginPage/>}/>

            <Route path='/' element={<AuthorizedRoutes/>}>
                <Route path="barbecues" element={<BarbecuesPage/>}/>
                <Route path="barbecue/:id" element={<BarbecueDetailsPage/>}/>

            </Route>
        </NavRoutes>
);
};

export default Routes;
