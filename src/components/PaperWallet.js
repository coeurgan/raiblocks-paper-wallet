import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { QRCode } from 'react-qr-svg';
import '../styles/paper_wallet.css';
import TemplatePrint from 'react-print';
import { connect } from 'react-redux';

class PaperWallet extends Component {
    renderPaperWallet() {
        return (
            <div className="paper-wallet">
                <img src={ this.props.arts.default.art }
                     width={ this.props.arts.default.size.width }
                     height={ this.props.arts.default.size.height }
                />

                <div className="public-key-code" style={{
                    width: this.props.arts.default.public_key.width,
                    height: this.props.arts.default.public_key.height,
                    left: this.props.arts.default.public_key.left,
                    bottom: this.props.arts.default.public_key.bottom,
                }}>
                    { this.props.publicKey }
                </div>
                <div className="public-key-qr-code" style={{
                    width: this.props.arts.default.public_key_qr.width,
                    height: this.props.arts.default.public_key_qr.height,
                    left: this.props.arts.default.public_key_qr.left,
                    bottom: this.props.arts.default.public_key_qr.bottom,
                }}>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.props.publicKey }
                    />
                </div>
                <div className="seed-qr-code" style={{
                    width: this.props.arts.default.seed_qr.width,
                    height: this.props.arts.default.seed_qr.height,
                    left: this.props.arts.default.seed_qr.left,
                    bottom: this.props.arts.default.seed_qr.bottom,
                }}>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.props.seed }
                    />
                </div>
                <div className="seed-code" style={{
                    width: this.props.arts.default.seed.width,
                    height: this.props.arts.default.seed.height,
                    left: this.props.arts.default.seed.left,
                    bottom: this.props.arts.default.seed.bottom
                }}>
                    { this.props.seed }
                </div>
                <div className="infos" style={{
                    width: this.props.arts.default.infos.width,
                    height: this.props.arts.default.infos.height,
                    left: this.props.arts.default.infos.left,
                    bottom: this.props.arts.default.infos.bottom
                }}>
                    <div>
                        <b>RaiBlocks Paper Wallet</b>
                    </div>
                    <div className="left-align" style={{fontSize: 11}}>
                        <div>- Do not reveal the private key and seed to anyone.</div>
                        <div>- Verify your balance by searching for the public address using a service such as raiblocks.net</div>
                        <div>- To withdraw and receive the funds sync the paper wallet with your seed into official desktop wallet (Make sure wallet is open and all blocks are downloaded).</div>
                        <br/>
                        <div className="responsive-text">
                            Private key: { this.props.privateKey }
                        </div>
                        <br/>
                        <div>Notes:</div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        ReactDOM.render(
            <TemplatePrint>
                { this.renderPaperWallet() }
            </TemplatePrint>,
            document.getElementById('print-mount')
        );
        return this.renderPaperWallet();
    }
}

function mapStateToProps(state) {
    return {
        arts: state.arts,
    }
}

export default connect(mapStateToProps)(PaperWallet);
