import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'
import Image from 'next/image';
import Arrow from '@/assets/arrow-down.svg'
import { ItemMenu } from './ItemMenu';
import { Search } from './Search';
import { Container } from './Container';

export function HeaderItau(){
  return(
    <header className='w-full h-20 bg-primary-orange flex items-center justify-center'>
      <Container>
        <div className="flex flex-1 justify-between items-center">
          <div className="flex items-center gap-14">
            <Image 
            src={Logo}
            alt='Logo'
            />
            <ul className='flex items-center gap-14'>
              <li>
                <ItemMenu 
                 name='Para você'
                />
              </li>
              <li>
                <ItemMenu 
                 name='Para empresas'
                />
              </li>
              <li>
                <ItemMenu 
                 name='Serviços'
                />
              </li>
              <li>
                <ItemMenu 
                 name='Ajuda'
                />
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Search />
            <button className='flex bg-primary-blue h-20 w-full items-center pl-10'>
              <Image src={IconUser} alt="icon"/>
              <span className='text-white font-bold'>Acessar conta</span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}