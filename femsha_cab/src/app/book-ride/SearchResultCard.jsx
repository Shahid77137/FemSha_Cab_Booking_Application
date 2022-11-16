// 'use client'
// import { useRouter, usePathname, useSearchParams } from 'next/router';
// import { useSelector, useDispatch } from 'react-redux';
// import React from 'react'
// import { URLSearchParams } from '@edge/runtime/primitives/url';

// // import { useSearchParams } from 'react-router-dom';

// const SearchResultCard = ({item, latitude_key, longitude_key, setActiveField, area_key}) => {
//     const dispatch = useDispatch();
//     const router = useRouter();
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//     const handleSelect = () => {
//         console.log("handle select ------",router, pathname, "---------",searchParams.toString());

//         const params = new URLSearchParams(searchParams);
//         params.set([latitude_key], item.lat);
//         params.set([longitude_key], item.lon);
//         params.set([area_key], item?.display_name);
//         console.log("url - ", pathname + "?" + params.toString())
//         dispatch(makeEmpty(SEARCH_SUCCESS))
//         setActiveField(null);
//     }
//     return (
//     <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
//         <div className='pr-5'>
//             <LcationOnIcon />
//         </div>
//         <div>
//             <p className='font-semibold'>{item?.display_name.split(" ")[0]}</p>
//             <p className='font-semibold opacity-60'>
//                 {item?.display_name}
//             </p>

//         </div>
//     </div>
//   );
// };

// export default SearchResultCard;


import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useRouter } from 'next/router'; // Importing the router from Next.js
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Assuming you're using MUI

const SearchResultCard = ({ item, latitude_key, longitude_key, setActiveField, area_key }) => {
    // const dispatch = useDispatch();
    // const router = useRouter(); // Using the router from Next.js
    // const searchParams = new URLSearchParams(router.query);

    const handleSelect = () => {
        // console.log("handle select ------", router, router.pathname, "---------", searchParams.toString());
        console.log()
        // searchParams.set(latitude_key, item.lat);
        // searchParams.set(longitude_key, item.lon);
        // searchParams.set(area_key, item?.display_name);
        // console.log("url - ", router.pathname + "?" + searchParams.toString());
        // dispatch(makeEmpty(SEARCH_SUCCESS));
        // setActiveField(null);
    };

    return (
        <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
            <div className='pr-5'>
                <LocationOnIcon />
            </div>
            <div>
                <p className='font-semibold'>Kolkata</p>
                <p className='font-semibold opacity-60'>
                New Market. 809. Flea & Street Markets. .
                    {/* {item?.display_name} */}
                </p>
            </div>
        </div>
    );
};

export default SearchResultCard;
