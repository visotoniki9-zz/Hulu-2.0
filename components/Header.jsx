import Image from 'next/image';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 h-auto justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="USER" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/logo.png"
        alt="logo"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
