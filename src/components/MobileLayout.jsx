
export default function MobileLayout(){
    return(
        <>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            padding: '1rem',
            boxSizing: 'border-box'
        }}>
            <div style={{
                maxWidth: '100vw',
                width: '100%',
                border: '1px solid #ffeeba',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                fontFamily: 'sans-serif',
                fontSize: '1rem',
                lineHeight: '1.5'
            }}>
                <p>
                    The mobile version of this site is not yet available. <br />
                    For the best experience, please visit using a PC, laptop, or tablet with a screen width over <strong>610px</strong>.
                </p>
                <p>
                    Currently, the Opera browser is not supported. <br />
                    Mobile and Opera support are coming soon!
                </p>
            </div>
        </div>
        </>
    );
}