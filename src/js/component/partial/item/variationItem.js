import React from 'react';
import PropTypes from 'prop-types';

//shadow or shiny shadow
//costume or shiny costume
//mega or shiny mega
//gender

export function VariationItem({ name }) {

    return (
        <>
            {{
                'shiny': <Shiny />,
                'shadow': <Shadow />,
                'costume': <Costume />,
                'mega': <Mega />,
                'gender': <Gender />,
                'shinyShadow': <ShinyShadow />
            }[name]}
        </>
    )

    function Shiny() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: '15px', height: '15px', position: 'relative', marginRight: '5px' }}>
                <div style={{ height: '25%', width: '25%', position: 'absolute', bottom: '11px', left: '0px' }}>
                    <div className={'shinyStar'}></div>
                </div>

                <div style={{ height: '25%', width: '25%', position: 'absolute', bottom: '5px', left: '12px' }}>
                    <div className={'shinyStar'}></div>
                </div>

                <div style={{ height: '25%', width: '25%', position: 'absolute', bottom: '-2px', left: '2px' }}>
                    <div className={'shinyStar'}></div>
                </div>
            </div>
        )
    }

    function Shadow() {
        return (
            <div style={{ height: '20px', width: '30px', position: 'relative' }}>
                <div style={{ height: '170%', width: '120%', position: 'absolute', bottom: '-3px', right: '-1px' }}>
                <div className={'shadowFlameIcon'}></div>
                </div>
            </div>
        )
    }

    function ShinyShadow() {
        return (
            <div style={{ height: '30px', width: '30px', marginBottom: '2px', position: 'relative' }}>
                <div style={{ height: '10px', width: '10px', position: 'absolute', left: '2px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', position: 'relative', marginRight: '5px' }}>

                        <div style={{ height: '25%', width: '25%', position: 'absolute', bottom: '6px', left: '0px' }}>
                            <div className={'shinyStar'}></div>
                        </div>
                        <div style={{ height: '25%', width: '25%', position: 'absolute', bottom: '2px', left: '8px' }}>
                            <div className={'shinyStar'}></div>
                        </div>
                        <div style={{ height: '25%', width: '25%', position: 'absolute', bottom: '-2px', left: '2px' }}>
                            <div className={'shinyStar'}></div>
                        </div>

                    </div>
                </div>
                <div className={'shadowFlameIcon'}></div>
            </div>
        )
    }

    function Costume() {
        return (null)
    }

    function Mega() {
        return (
            <div style={{ height: '15px', width: '15px' }}>
                <div className={'rune'}>
                    <div className={'dna'}>
                        <div className={'runestripeone'}></div>
                        <div className={'runestripetwo'}></div>
                        <div className={'runestripethree'}></div>
                    </div>
                </div>
            </div>
        )
    }

    function Gender() {
        return (
            <div style={{ height: '20px', width: '20px', display: 'flex', flexDirection: 'row' }}>
                <div className={'genderCircle'}>

                    <div className={'maleCross'}>
                        <div className={'maleInner1'}></div>
                        <div className={'maleInner2'}></div>
                    </div>

                    <div className={'femaleCross'}>
                        <div className={'femaleInner'}></div>
                    </div>

                </div>
            </div>
        )
    }
}

VariationItem.propTypes = {
    name: PropTypes.string.isRequired
}