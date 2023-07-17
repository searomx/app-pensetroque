import React, { Component } from "react";
import { StyleSheet, View, Text, Platform, ImageBackground, Image } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";
import Background from "../components/Background";
import CustomText from "../components/Text";
import EditButton from "../components/EditButton";
import Divider from "../components/Divider";
import Menu from "../components/Menu";

import MainPicture from "../components/MainPicture";
import OtherPicture from "../components/OtherPicture";
import OptionalListItem from "../components/OptionalListItem";
import MiniProfile from "../components/MiniProfile";

import Checkbox from "../components/Checkbox";

import TextArea from "../components/TextArea";

import Logo from "../assets/logotipo.svg";
import Save from "../assets/save.svg";
import HeaderLogo from "../assets/headerlogo.png";
import { Actions } from "react-native-router-flux";

const menuTipos = [{ value: 0, label: "CARRO" }, { value: 1, label: "MOTO" }];
const menuMarcas = [{ value: 0, label: "FIAT" }, { value: 1, label: "HONDA" }, { value: 2, label: "AUDI" }];
const menuModelos = [{ value: 0, label: "147" }, { value: 1, label: "CIVIC" }, { value: 2, label: "A3" }];
const menuAnos = [{ value: 0, label: "1999" }, { value: 1, label: "2000" }, { value: 2, label: "2001" }];
const menuVersoes = [{ value: 0, label: "1.0" }, { value: 1, label: "2.0 AUTOMATICO" }, { value: 2, label: "1.6 MANUAL" }];
const menuEstados = [{ value: 0, label: "SP" }, { value: 1, label: "RJ" }, { value: 2, label: "MG" }];
const menuCidades = [{ value: 0, label: "SÃO PAULO" }, { value: 1, label: "SANTO ANDRÉ" }, { value: 2, label: "SÃO BERNARDO" }];
const menuOpcionais = [{ value: 0, label: "Air Bag" }, { value: 1, label: "Direção Hidraulica" }, { value: 2, label: "Ar Condicionado" }];
const menuInformacoes = [{ value: 0, label: "IPVA Pago" }, { value: 1, label: "Licenciado" }, { value: 2, label: "Único Dono" }];
const menuCarrocerias = [{ value: 0, label: "HATCH" }, { value: 1, label: "SEDAN" }];
const menuCombustiveis = [{ value: 0, label: "FLEX" }, { value: 1, label: "GASOLINA" }, { value: 2, label: "ALCOOL" }];
const menuPlacas = [{ value: 0, label: "8" }, { value: 1, label: "6" }, { value: 2, label: "4" }];
const menuCores = [{ value: 0, label: "BEGE" }, { value: 1, label: "PRETO" }, { value: 2, label: "VERMELHO" }];
const menuCambios = [{ value: 0, label: "MANUAL" }, { value: 1, label: "AUTOMATICO" }];

class component extends Component {
  state = {
    tipo: null,
    marca: null,
    modelo: null,
    anoDoModelo: null,
    anoDeFabricacao: null,
    versao: null,

    kmDe: "100",
    kmAte: "10000",

    estado: null,
    cidade: null,

    carroceria: null,
    combustivel: null,
    placa: null,
    cor: null,
    cambio: null,
    
    opcionalSelecionado: null,
    informacaoSelecionada: null,
    listaOpcionais: [],
    listaInformacoes: [],
  };

  nextSceneHandler = () => {
    //Actions.VeiculoProfile();
  };

  onValueChange = (input, value) => this.setState({ [input]: value });

  handleAddOptionals = () => {
    if(this.state.opcionalSelecionado === null) return;
    const items = [...this.state.listaOpcionais, menuOpcionais[this.state.opcionalSelecionado]];
    const unique = items.filter((v,i,a)=>a.findIndex(t=>(t.label === v.label || t.value === v.value ))===i);
    this.setState({listaOpcionais: unique});
  }
  
  handleDeleteOptionals = (value) => {
    const items = this.state.listaOpcionais.filter(item => item.value !== value);
    this.setState({ listaOpcionais: items });
  }

  handleAddInformations = () => {
    if(this.state.informacaoSelecionada === null) return;
    const items = [...this.state.listaInformacoes, menuInformacoes[this.state.informacaoSelecionada]];
    const unique = items.filter((v,i,a)=>a.findIndex(t=>(t.label === v.label || t.value === v.value ))===i);
    this.setState({listaInformacoes: unique});
  }
  
  handleDeleteInformations = (value) => {
    const items = this.state.listaInformacoes.filter(item => item.value !== value);
    this.setState({ listaInformacoes: items });
  }

  render() {
    return (
      <Background white padding>
        <Image source={HeaderLogo} style={styles.headerLogo} />

        <CustomText prompt bold large yellow>
          Filtros para Troca
        </CustomText>

        <CustomText bold yellow margin>
          Nessa tela você vai cadastrar um ou mais veículos que pretende na troca, tente colocar o máximo de detalhes possível, pois quanto mais
          detalhado for esse veículo, melhores serão as suas chances de uma excelente troca.
        </CustomText>

        <Checkbox>Veículo novo</Checkbox>
        <Checkbox>Veículo usado</Checkbox>

        <Menu value={this.state.tipo} input={"tipo"} placeholder={"TIPO"} items={menuTipos} onValueChange={this.onValueChange} />
        <Menu value={this.state.marca} input={"marca"} placeholder={"MARCA"} items={menuMarcas} onValueChange={this.onValueChange} />
        <Menu value={this.state.modelo} input={"modelo"} placeholder={"MODELO"} items={menuModelos} onValueChange={this.onValueChange} />
        <Menu value={this.state.anoDoModelo} input={"anoDoModelo"} placeholder={"ANO DO MODELO"} items={menuAnos} onValueChange={this.onValueChange} />
        <Menu value={this.state.anoDeFabricacao} input={"anoDeFabricacao"} placeholder={"ANO DE FABRICAÇÃO"} items={menuAnos} onValueChange={this.onValueChange} />
        <Menu value={this.state.versao} input={"versao"} placeholder={"VERSÃO"} items={menuVersoes} onValueChange={this.onValueChange} />

        {/* <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"TIPO"} menuOptions={this.state.menuOptions} margin />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"MARCA"} menuOptions={this.state.menuOptions} margin />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"MODELO"} menuOptions={this.state.menuOptions} margin />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"ANO DO MODELO"} menuOptions={this.state.menuOptions} margin />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"ANO DE FABRICAÇÃO"} menuOptions={this.state.menuOptions} margin />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"VERSÃO"} menuOptions={this.state.menuOptions} margin /> */}

        <Checkbox>SOMENTO VEÍCULOS COM FOTOS</Checkbox>
        
        <View style={styles.textContainer}>
          <CustomText roboto bold medium black margin>
            Quilometragem
          </CustomText>
        </View>

        <View style={styles.kmContainer}>
          <Input blue label={"DE"} value={this.state.kmDe} keyboardType={"number-pad"} maxLength={10} onChangeText={text => this.setState({ kmDe: text })} />
          <Input blue label={"ATÉ"} value={this.state.kmAte} keyboardType={"number-pad"} maxLength={10} onChangeText={text => this.setState({ kmAte: text })} />
        </View>

        <View style={styles.textContainer}>
          <CustomText roboto bold medium black margin>
            Localização
          </CustomText>
        </View>
        <Menu value={this.state.estado} input={"estado"} placeholder={"ESTADO"} items={menuEstados} onValueChange={this.onValueChange} />
        <Menu value={this.state.cidade} input={"cidade"} placeholder={"CIDADE"} items={menuCidades} onValueChange={this.onValueChange} />
        {/* <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"ESTADO"} menuOptions={this.state.menuOptions} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"CIDADE"} menuOptions={this.state.menuOptions2} /> */}

        <View style={styles.textContainer}>
          <CustomText roboto bold black medium margin>
            Opcionais
          </CustomText>
        </View>

        <Checkbox>AR CONDICIONADO</Checkbox>
        <Checkbox>DIREÇÃO HIDRÁULICA/ELÉTRICA</Checkbox>
        <Checkbox>CÂMBIO AUTOMÁTICO</Checkbox>
        <Checkbox>DESEMBAÇADOR TRASEIRO</Checkbox>

        <View style={styles.textContainer}>
          <CustomText roboto bold black medium margin>
            Outros opcionais
          </CustomText>
        </View>

        <View style={styles.header}>
          {/* <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"AIR BAG"} menuOptions={this.state.menuOptions3} margin /> */}
          <Menu value={this.state.opcionalSelecionado} input={"opcionalSelecionado"} placeholder={"SELECIONE OS ITENS"} items={menuOpcionais} onValueChange={this.onValueChange} />
          <Button xsmall add onPress={this.handleAddOptionals}/>
        </View>
        
        <View style={styles.textContainer}>
          <CustomText roboto medium>
          Lista de opcionais
          </CustomText>
        </View>

        <Divider />
        
        {this.state.listaOpcionais.map((item, index) => (
          <OptionalListItem label={item.label} key={index} onPress={()=>this.handleDeleteOptionals(item.value)} />
        ))}
        
        <Divider />
        
        <Menu value={this.state.carroceria} input={"carroceria"} placeholder={"CARROCERIA"} items={menuCarrocerias} onValueChange={this.onValueChange} />
        <Menu value={this.state.combustivel} input={"combustivel"} placeholder={"COMBUSTÍVEL"} items={menuCombustiveis} onValueChange={this.onValueChange} />
        <Menu value={this.state.placa} input={"placa"} placeholder={"FINAL DA PLACA"} items={menuPlacas} onValueChange={this.onValueChange} />
        <Menu value={this.state.cor} input={"cor"} placeholder={"COR"} items={menuCores} onValueChange={this.onValueChange} />
        <Menu value={this.state.cambio} input={"cambio"} placeholder={"CÂMBIO"} items={menuCambios} onValueChange={this.onValueChange} />
        <Checkbox>BLINDADO</Checkbox>

        {/* <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"HACH"} menuOptions={this.state.menuOptions3} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"GASOLINA"} menuOptions={this.state.menuOptions3} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"8"} menuOptions={this.state.menuOptions3} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"VERMELHO"} menuOptions={this.state.menuOptions3} />
        <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"CÂMBIO"} menuOptions={this.state.menuOptions3} /> */}

        {/* <Checkbox>BLINDADO</Checkbox> */}

        <View style={styles.textContainer}>
          <CustomText roboto bold black medium>
            Outras informações
          </CustomText>
        </View>
        
       <View style={styles.header}>
          {/* <Menu onSelect={value => alert(`Selected number: ${value}`)} title={"AIR BAG"} menuOptions={this.state.menuOptions3} margin /> */}
          <Menu value={this.state.informacaoSelecionada} input={"informacaoSelecionada"} placeholder={"SELECIONE OS ITENS"} items={menuInformacoes} onValueChange={this.onValueChange} />
          <Button xsmall add onPress={this.handleAddInformations}/>
        </View>
        
        <View style={styles.textContainer}>
          <CustomText roboto medium>
          Lista de informações
          </CustomText>
        </View>

        <Divider />
        
        {this.state.listaInformacoes.map((item, index) => (
          <OptionalListItem label={item.label} key={index} onPress={()=>this.handleDeleteInformations(item.value)} />
        ))}
        
        <Divider />

        <Button onPress={this.nextSceneHandler}>SALVAR FILTROS</Button>
       
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  headerLogo: {
    width: 220,
    height: 30,
    marginBottom: 20
  },
  test: {
    width: "100%",
    height: 40,
    backgroundColor: "red"
  },
  test2: {
    width: "50%",
    height: 20,
    backgroundColor: "blue"
  },
  logo: {
    width: 60,
    height: 80
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  carValue: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  otherPicturesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10
  },
  addOptionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  },
  textContainer:{
    marginTop: 30
  },
  kmContainer:{
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  saveButton: {
    height: 53,
    width: 53,
    borderRadius: 100,
    backgroundColor: "#002278",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignSelf: "flex-end",
    marginTop: 30
  }
});

export default component;
