import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

export default class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageurl: 'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageurl: 'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    id: 4,
                    title: 'women',
                    imageurl: 'https://i.ibb.co/GCCdy8t/women.png',
                    size: 'large'
                },
                {
                    id: 5,
                    title: 'men',
                    imageurl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large'
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, title, imageurl, size}) => (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageurl}
                        size={size}
                    />
                ))}
            </div>
        )
    }
}