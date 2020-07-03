import * as React from 'react';

interface IProps {

}

interface IState {

}

class HomePage extends React.Component<IProps, IState> {

    public render() {
        return (
            <div className="text-red-500">
                Home Page
            </div>
        );
    }
}

export default HomePage;