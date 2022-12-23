import { designStudioCanvas } from "../1860_Database/database_1860"
import { bathroom_flooring_1989, kitchen_flooring_1989 } from "./1989_flooring"

    
    export enum cabinets{
        cabinet1,
        cabinet2,
        cabinet3,
        cabinet4,
        cabinet5,
        cabinet6
    }
  
    export enum flooring{
        flooring1,
        flooring2,
        flooring3,
        flooring4,
        flooring5
    }
  
    export enum lighting{
        lighting1,
        lighting2,
        lighting3,
        lighting4,
        lighting5
    }
  
    export enum backsplash{
        backsplash1,
        backsplash2,
        backsplash3,
        backsplash4,
        backsplash5
    }

    export let furniture = new Array
    furniture[0] = cabinets
    furniture[1] = flooring
    furniture[2] = lighting
    furniture[3] = backsplash



// let test = new Entity()
// test.addComponent(new GLTFShape(`models/${backsplash[0]}`))

export function getRandomInt(min:number, max:number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  class dataPoint {
      constructor(
      public uiImage: UIImage,
      public shape: GLTFShape
    ) {}
  }

    export let bathroom_backsplash_1989 = new Array
    bathroom_backsplash_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplaπsh_center.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_BP_BackplashCenterLinearwhite.gltf'))
    bathroom_backsplash_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_marble.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_BP_MarbleWinterFrost.gltf'))
    bathroom_backsplash_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_sculpture.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_BP_SculptureOro.gltf'))
    bathroom_backsplash_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_sweden.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_BP_SwedenVadretPolished.gltf'))
    bathroom_backsplash_1989[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_backsplash/bathroom_backsplash_zellige.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_BP_ZelligeMystique.gltf'))

    export let bathroom_cabinets_1989 = new Array
    bathroom_cabinets_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_stone.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_cabinets_bolder.gltf'))
    bathroom_cabinets_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_espresso.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_cabinets_espresso.gltf'))
    bathroom_cabinets_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_linen.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_cabinets_linen.gltf'))
    bathroom_cabinets_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_truffle.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_cabinets_truffle.gltf'))

    export let bathroom_countertops_1989 = new Array
    bathroom_countertops_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_arctic_white.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_CounterTops_QuartzArcticWhite.gltf'))
    bathroom_countertops_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_calacatta.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_CounterTops_QuartzCalacattaUltra.gltf'))
    bathroom_countertops_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_et_noir.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_CounterTops_QuartzEtNoir.gltf'))
    bathroom_countertops_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_expo_gray_ceontino.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_CounterTops_QuartzExpoGray.gltf'))
    bathroom_countertops_1989[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_karmelo.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_CounterTops_QuartzCalacattaKarmelo.gltf'))
    bathroom_countertops_1989[5] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_msi_celdonia.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_CounterTops_GraniteCaledonia.gltf'))
    bathroom_countertops_1989[6] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_valle_nevado_msi.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_CounterTops_GraniteValleNevado.gltf'))

export let bathroom_faucets_1989 = new Array
    bathroom_faucets_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Faucets/faucet_brushed_nickel.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_faucet_Cia_nickel.gltf'))
    bathroom_faucets_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Faucets/faucet_finish_chrome.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_faucet_GibsonChrome.gltf'))
    bathroom_faucets_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Faucets/faucet_finish_matte_black.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_faucet_GibsonMateBlack.gltf'))
    bathroom_faucets_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Faucets/faucet_satin_brass.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_faucet_Cia_gold.gltf'))

    export let bathroom_lights_1989 = new Array
    bathroom_lights_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Lights/bathroom_lights_syden_brass.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_Light_syden_gold.gltf'))
    bathroom_lights_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Lights/bathroom_lights_syden_nickel.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_Light_syden_black.gltf'))
    bathroom_lights_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Lights/bathroom_lights_windom_chrome.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_Light_Windom_chrome.gltf'))
    bathroom_lights_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Bathroom_Lights/bathroom_lights_windom_midnight.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_bathroom_Light_Windom_black.gltf'))

    export let kitchen_backsplash_1989 = new Array
    kitchen_backsplash_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_bianco_gioia_mosiac.png')), new GLTFShape('models/KB_Homes/1989/custom/kitchen_backsplash/BP_MarbleBiancoGioiaPinwheelMosaic.glb'))
    kitchen_backsplash_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_dalite_graceful_fan.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_BP_Revalia_Remix_Graceful_Greige_Fan.gltf'))
    kitchen_backsplash_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_dalitile_gray_herringbone.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_BP_Artezen_IdealGrayHerringbone.gltf'))
    kitchen_backsplash_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_emser_glossy.png')), new GLTFShape('models/KB_Homes/1989/custom/kitchen_backsplash/BP_CatchIISiliconGloss.glb'))
    kitchen_backsplash_1989[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_emser_omni_navy.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_BP_Omni_Navy_Glossy_Picket.gltf'))
    kitchen_backsplash_1989[5] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchy7en_Backsplash/kitchen_backsplash_marble_obsession_arabscato.png')), new GLTFShape('models/KB_Homes/1989/custom/kitchen_backsplash/BP_MarbleObsessionArabescato.glb'))
    kitchen_backsplash_1989[6] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Backsplash/kitchen_backsplash_passion_verde.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_BP_Passion_Verde.gltf'))

    export let kitchen_cabinets_1989 = new Array
    kitchen_cabinets_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_espresso.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_Kitchen_Cabinets_Espresso.gltf'))
    kitchen_cabinets_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_linen.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_Kitchen_Cabinets_Linen.gltf'))
    kitchen_cabinets_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_stone.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_Kitchen_Cabinets_Bolder.gltf'))
    kitchen_cabinets_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Cabinets/kitchen_cabinets_truffle.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_Kitchen_Cabinets_Truffle.gltf'))

    export let kitchen_countertops_1989 = new Array
    kitchen_countertops_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_arctic_white.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_Countertops_QuartzArcticWhite.gltf'))
    kitchen_countertops_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_calacatta.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_Countertops_QuartzCalacattaUltra.gltf'))
    kitchen_countertops_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_et_noir.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_Countertops_QuartzEtNoir.gltf'))
    kitchen_countertops_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_expo_gray_ceontino.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_Countertops_QuartzExpoGray.gltf'))
    kitchen_countertops_1989[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_karmelo.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_Countertops_QuartzCalacattaKarmelo.gltf'))
    kitchen_countertops_1989[5] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_msi_celdonia.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_Countertops_GraniteCaledonia.gltf'))
    kitchen_countertops_1989[6] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Countertops/kitchen_countertops_valle_nevado_msi.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_Countertops_GraniteValleNevado.gltf'))

    export let kitchen_faucets_1989 = new Array
    kitchen_faucets_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Faucets/kitchen_faucets_align_brushed_gold.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_faucet_AlignBrushedGold.gltf'))
    kitchen_faucets_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Faucets/kitchen_faucets_align_chrome.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_faucet_AlignChrome.gltf'))
    kitchen_faucets_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Faucets/kitchen_faucets_align_matte_black.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_faucet_AlignMatteBlack.gltf'))
    kitchen_faucets_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Faucets/kitchen_faucets_align_srs.png')), new GLTFShape('models/KB_Homes/Changeable_assets/1989_kitchen_faucet_AlignSRS.gltf'))


    export let kitchen_ligthing_1989 = new Array
    kitchen_ligthing_1989[0] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-18.png')), new GLTFShape('models/KB_Homes/1989/custom/kitchen_lighting/Light_OdenMidnightBlack.glb'))
    kitchen_ligthing_1989[1] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-19.png')), new GLTFShape('models/KB_Homes/1989/custom/kitchen_lighting/Light_ArildaBrushedNickel.glb'))
    kitchen_ligthing_1989[2] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-20.png')), new GLTFShape('models/KB_Homes/1989/custom/kitchen_lighting/Light_ZireMidnightBlack.glb'))
    kitchen_ligthing_1989[3] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-21.png')), new GLTFShape('models/KB_Homes/1989/custom/kitchen_lighting/Light_HeathWhite_Brass.glb'))
    kitchen_ligthing_1989[4] = new dataPoint( new UIImage(designStudioCanvas, new Texture('imagesUI/DesignStudio_Interface/Kitchen_Lighting/KBHOMES_ChoicesUI-22.png')), new GLTFShape('models/KB_Homes/1989/custom/kitchen_lighting/Light_DiannaSatinBrass.glb'))
  



    export let furnitureArrayDB2 = new Array

    furnitureArrayDB2[0] = bathroom_faucets_1989
    furnitureArrayDB2[1] = bathroom_flooring_1989
    furnitureArrayDB2[2] = bathroom_lights_1989
    furnitureArrayDB2[3] = bathroom_backsplash_1989
    furnitureArrayDB2[4] = bathroom_cabinets_1989
    furnitureArrayDB2[5] = bathroom_countertops_1989

    furnitureArrayDB2[6] = kitchen_cabinets_1989
    furnitureArrayDB2[7] = kitchen_countertops_1989
    furnitureArrayDB2[8] = kitchen_faucets_1989
    furnitureArrayDB2[9] = kitchen_flooring_1989
    furnitureArrayDB2[10] = kitchen_ligthing_1989
    furnitureArrayDB2[11] = kitchen_backsplash_1989