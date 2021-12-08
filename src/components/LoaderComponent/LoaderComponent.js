import Loader from "react-loader-spinner";
import './styles.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderComponent = () => {
    return (
        <div className="LoaderComponent">
            <Loader
                type="Puff"
                color="#E10098"
                height={100}
                width={100}
            />
        </div>
    );
}

export default LoaderComponent;