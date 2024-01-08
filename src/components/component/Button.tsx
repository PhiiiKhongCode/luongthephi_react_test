

 const Button = ({height='h-[54.206px]', width='w-[419.249px]', textColor= 'text-white', bgColor='bg-green_btn-100', border='', children=''})=>{


    return(
        <button className={`${height} ${width} ${textColor} ${bgColor} ${border} items-center rounded-lg md:text-2xl sm:text-lg ssm:text-base] text-center font-medium flex justify-center`}>{children}</button>
    )
}

export default Button