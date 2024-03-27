import './App.css';
import Kniggers from './Kniggers.png';
import strelk from './strelk.png';
import vk from './logo-vk.svg';
import tg from './logo-tg.svg';
import wp from './logo-wp.svg';
function Sect1() {
    return(
        <div className='bg-Black h-[926px] flex justify-end'>
            <div className='relative flex flex-col w-[700px] pt-[200px] right-[400px] '>
                <p className='font-Kompost text-4xl text-Zelya'>Открой магию слов</p>
                <p className='font-Karmina text-[150px] text-[#FFFFFF] mt-[-70px] mb-[-20px] tracking-wider'>Чернокнижник-</p>
                <p className='font-Light text-[#FFFFFF] text-lg w-[625px] pb-[20px]'>ваш проводник в мир тайн и магии литературы. 
                Откройте двери в волшебные истории, окутанные пеленой тайны, и обретите силу знания в нашем магазине книг. 
                У нас вы найдете не только произведения из мрачных уголков фэнтези и хоррора, 
                но и шедевры классики, которые будут вдохновлять и вас, и ваших героев</p>
                <div className=' flex justify-end'>
                <button className='flex justify-end  pl-[40px] pr-[10px] py-[10px]  rounded-lg border-4 border-Zelya gap-[40px] text-3xl items-center'>
                    <p className='text-[#FFFFFF] font-Light '>Погрузится в магию</p>
                    <img src={strelk} className='flex '/>
                </button>
                </div>
            </div>
            <img src={Kniggers}  className='w-[1200px] absolute top-[50px] right-[600px]' alt=''/>
            <div className=''>
                <img src={vk} alt=''/>
                <img src={tg} alt=''/>
                <img src={wp} alt=''/>
            </div>
        </div>
    )
}
export default Sect1;
