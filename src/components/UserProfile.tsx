import { FC, ReactElement, useState } from 'react';
import '../styles/UserProfile.css';

export const UserProfile: FC<any> = (props): ReactElement => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="user-profile-container">
            <div className="user-img"><img></img></div>
            <div className="user-name">UserName</div>
        </div>
    )
}