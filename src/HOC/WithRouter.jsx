import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

export default function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}