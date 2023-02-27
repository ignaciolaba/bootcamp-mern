import React from 'react'

class PersonalCard extends React.Component {

        render() {
            const {firstName, lastName, age, hairColor} = this.props;
            return <div>
                <h1>{lastName}, {firstName}</h1>
                <p>{age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        }
}

export default PersonalCard;