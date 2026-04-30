import logo from '@/assets/logo.png'
import { format } from 'date-fns';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            <Image className='mx-auto'
            src={logo} height={200} width={300} alt='logo'
            />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE,MMM,dd, yyyy")}</p>
            
        </div>
    );
};

export default Header;