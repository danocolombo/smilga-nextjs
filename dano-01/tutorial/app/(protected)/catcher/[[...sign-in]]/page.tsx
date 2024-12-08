const CatcherPage = ({ params }: { params: { 'sign-in': string[] } }) => {
    if (!params['sign-in'] || params['sign-in'].length === 0) {
        return (
            <>
                <div>Catcher : no params</div>
                <div className='h-96'>
                    <div>params: catcher/[MISSING]/[MISSING]</div>
                </div>
            </>
        );
    }
    if (params['sign-in'].length === 1) {
        return (
            <>
                <div>Catcher :{params['sign-in'][0]}</div>
                <div className='h-96'>
                    <div>params: </div>
                    <div className='ml-10'>
                        {params['sign-in'].join('/')}/[MISSING]
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div>Catcher :{params['sign-in'][1]}</div>
            <div className='h-96'>
                <div>params: </div>
                <div className='ml-10'>{params['sign-in'].join('/')}</div>
            </div>
        </>
    );
};
export default CatcherPage;
