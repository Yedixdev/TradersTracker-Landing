import logo from "../../assets/logo-con-negro.png";
import apple from "../../assets/apple-logo.png";
import google from "../../assets/play-store-logo.png";
import ImgDark from "../../assets/bg-dark.svg";
import ImgLigth from "../../assets/bg-ligth.svg";
import { useTheme } from "../../hooks/useTheme";
import { useEffect } from "react";

const Section1 = () => {
    const { theme } = useTheme();
    useEffect(() => {
        console.log(theme);
    }, [theme]);
    return (
        <div className=" relative pt-8 px-20 pb-6 w-full flex flex-col gap-10 lg:gap-20 items-center justify-cente">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-800">
                {/* <img src={ImgDark} alt="bg-ligth" className="w-full h-full object-cover invert dark:invert-0" /> */}
                <img src={ImgLigth} alt="bg-ligth" className="w-full h-full object-cover  dark:invert dark:contrast-125" />
            </div>
            <div className="w-full flex flex-col lg:flex-row  items-center justify-center gap-10 relative z-10">
                <div className="max-w-[300px] md:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[560px] flex flex-col items-center justify-center gap-4 relative">
                    <div className="flex flex-col items-center gap-2">
                        <div className="px-5 py-1.5 rounded-full shadow-md shadow-gray-600 bg-gray-200">
                            Únete a una nueva comunidad!
                        </div>
                        <div className="logo-text">
                            <div className="traders text-gray-900 dark:text-gray-200">Traders</div>
                            <div className="tracker text-yellow-500">Tracker</div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex items-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] xl:w-[90px] xl:h-[90px] 2xl:w-[100px] 2xl:h-[100px]">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="flex md:text-lg xl:text-xl 2xl:text-2xl md:leading-6 text-center font-semibold text-gray-900 dark:text-gray-200">
                            Conviértete en un trader más organizado y efectivo
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <div className="w-[150px] xl:w-[200px] h-12 xl:h-14 rounded-full flex flex-row gap-2 items-center justify-center bg-gray-100 shadow-md shadow-gray-600 hover:opacity-80 cursor-pointer">
                                <img className="w-[25px] h-[25px] xl:w-[30px] xl:h-[35px]" src={apple} alt="apple" />
                                <div className="text-sm font-semibold xl:text-xl">App Store</div>
                            </div>
                            <div className="w-[150px] xl:w-[200px] h-12 xl:h-14 rounded-full flex flex-row gap-1 items-center justify-center bg-gray-100 shadow-md shadow-gray-600 hover:opacity-80 cursor-pointer">
                                <img className="w-[35px] h-[35px] xl:w-[45px] xl:h-[45px]" src={google} alt="google" />
                                <div className="text-sm font-semibold xl:text-xl">Google Play</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="font-semibold text-sm xl:text-xl text-gray-900 dark:text-gray-200">Empieza a registrar tus hábitos hoy!</div>
                            <div className="font-semibold text-sm xl:text-xl text-yellow-400">¡Descárgalo ya!</div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex w-[400px] xl:w-[500px] 2xl:w-[600px] h-[400px] items-center justify-center bg-slate-300"></div>
            </div>
        </div>
    );
};

export default Section1;
