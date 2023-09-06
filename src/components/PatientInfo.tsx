import Avatar from './Avatar';
import DropDown from './DropDown';
import { IPatientData } from '../types/types';
import { agePluralsConfig } from '../configs/configs';
import { getLocalePlural } from '../utils/utils';

function PatientInfo({ avatar, name, age, gender }: IPatientData) {
    return (
        <section className="patient-info">
            <Avatar src={avatar} size="big" />
            <div className="patient-info__wrapper">
                <div className="patient-info__info">
                    <h2 className="patient-info__name">{name}</h2>
                    <p className="patient-info__age">
                        {`${age} ${agePluralsConfig[getLocalePlural(age)]}, ${
                            gender === 'male' ? 'муж' : 'жен'
                        }`}
                    </p>
                </div>
                <DropDown />
            </div>
        </section>
    );
}

export default PatientInfo;
