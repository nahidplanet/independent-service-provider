import React, { useState } from 'react';
import { css } from "@emotion/react";
import { FadeLoader } from 'react-spinners';

const Loader = () => {
    const override = css`
    display: block;
    margin: 0 auto;
  `;
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#FF9B09");
    return (
        <div className="flex justify-center items-center h-[80vh] w-full">

            <FadeLoader color={color} loading={loading} css={override} height={15} width={5} radius={2} margin={2} />
        </div>

    );
};

export default Loader;