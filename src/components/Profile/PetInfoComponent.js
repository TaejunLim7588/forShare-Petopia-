import React from 'react';
import styled from 'styled-components';
import CustomRoundDiv from '../CustomComponents/CustomRoundDiv';

const Container = styled.div`
    box-sizing: border-box;
    border-radius: 12px;
    width: 120px;
    height: 95px;
    border: 1px solid #f02b70;
    padding: 10px 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    flex: 0 0 auto;

    .additional {
        color: gray;
        font-size: 10px;
    }
`;


const PetInfoComponent = ({pet, onClick}) => {

    const ageCalculator = (date) => {
        const ageDifMs = Date.now() - date;
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    return (
        <Container onClick={() => onClick()}>
            <CustomRoundDiv height={40} width={40} borderradius={20} margin={'0px 0px 5px 0px'}/>
            <div>{pet.name}</div>
            <div className='additional'>{`${pet.gender === 'male' ? '♂' : '♀'} ${ageCalculator(pet.birth)}세`}</div>
        </Container>
    );
};

export default PetInfoComponent;