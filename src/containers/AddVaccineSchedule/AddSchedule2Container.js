import React from 'react';
import { connect } from 'react-redux';
import { onPetChanged } from '../../modules/VaccineSchedule';
import AppbarComponent from '../../components/AppbarComponent';
import styled from 'styled-components';
import CustomRoundDiv from '../../components/CustomComponents/CustomRoundDiv';
import { useNavigate } from 'react-router-dom';
import { IoMdCheckmark } from "react-icons/io";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    span {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding: 8px 0;
    font-weight: bold;

    .active {
        color: #f02b70;
        font-size: 20px;
    }

    .deactive {
        font-size: 15px;
    }
`;

const PetListWrapper = styled.div`
    height: 300px;
    width: 250px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 0px 8px lightgray;
    padding: 5px 10px;
    box-sizing: border-box;
`;

const AddSchedule2Container = ({pet_id, onPetChanged}) => {
    const petlist = ['따릉이', '똘이', '초코', '비비']

    const navigate = useNavigate();
    const onNextClicked = () => {
        if (pet_id) {
            navigate('/addschedule3')
        };
    }

    return (
        <>
            <AppbarComponent>
                2/4
            </AppbarComponent> 
            <Container>
                <span>대상을 특정하여 주세요</span>
                <PetListWrapper>
                    {petlist.map(pet => <PetItem pet={pet} pet_id={pet_id} key={pet} onClick={onPetChanged}/>)}
                </PetListWrapper>
                <CustomRoundDiv height={40} width={90} margin={'20px 0 0 0'} backgroundcolor={pet_id ? "#f02b70" : 'lightgray'} onClick={onNextClicked}>
                    다음
                </CustomRoundDiv>
            </Container>
        </>
    );
};

const PetItem = ({pet, pet_id, onClick}) => {
    return <ItemWrapper onClick={() => onClick(pet)}>
        <div style={{display: 'inline-flex'}}>
            <CustomRoundDiv margin={'0 8px 0 0'}/>
            {pet}            
        </div>
        <IoMdCheckmark className={pet === pet_id ? 'active' : 'deactive'}/>
    </ItemWrapper>
}

export default connect(({VaccineSchedule}) => ({
    pet_id: VaccineSchedule.pet_id
}),{
    onPetChanged
})(AddSchedule2Container);