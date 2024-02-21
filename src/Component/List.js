import react from 'react';
import { useState } from 'react';
import { Props_function } from './Props_function';
import Props_class from './Props_class';
import AS_14_input_val_print from './AS_14_input_val_print';
import AS_15_show_hide_toggle from './AS_15_show_hide_toggle';
import AS_17_Form_handling from './AS_17_Form_handling';
import AS_18_Conditional_login_by_tarnary_operator from './AS_18_Conditional_login_by_tarnary_operator';
import AS_19_form_validation from './AS_19_form_validation';
import AS_20_function_as_props_parent from './AS_20_function_as_props_parent';


import { AS_22_class_life_cycle_Constructor } from './AS_22_class_life_cycle_Constructor';
import AS_23_class_life_cycle_render from './AS_23_class_life_cycle_render';
import AS_24_class_life_cycle_componentDidMount from './AS_24_class_life_cycle_componentDidMount';
import AS_25_class_life_cycle_componentDidUpdate from './AS_25_class_life_cycle_componentDidUpdate';
import AS_26_class_life_cycle_shouldComponentUpdate from './AS_26_class_life_cycle_shouldComponentUpdate';
import As_27_class_life_cycle_componentWillUnmount_parent from './As_27_class_life_cycle_componentWillUnmount_parent';
import AS_29_hooks_useEffect from './AS_29_hooks_useEffect';
import AS_30_Hooks_useEffect_conditional from './AS_30_Hooks_useEffect_conditional';
import AS_30_useEffect_conditional_props_change_parent from './AS_30_useEffect_conditional_props_change_parent';
import AS_30_useEffect_conditional_props_change_child from './AS_30_useEffect_conditional_props_change_child';
import AS_31_css_type from './AS_31_css_type';


import AS_32_react_bootstrap from './AS_32_bootsrap_basic';
import AS_33_map_with_array_and_object from './AS_33_map_with_array_and_object';
import AS_35_nested_table_with_map from './AS_35_nested_table_with_map';
import AS_36_componet_reuse_by_list_props_parent from './AS_36_componet_reuse_by_list_props_parent';
import AS_36_componet_reuse_by_list_props_child from './AS_36_componet_reuse_by_list_props_child';
import AS_37_React_fragment_parent from './AS_37_React_fragment_parent';
import AS_38_lifting_up_data_transfer_from_child_to_parent_parent from './AS_38_lifting_up_data_transfer_from_child_to_parent_parent';
import AS_38_lifting_up_data_transfer_from_child_to_parent_child from './AS_38_lifting_up_data_transfer_from_child_to_parent_child';
import AS_39_for_class_pure_component_parent from './AS_39_for_class_pure_component_parent';
import AS_40_use_Memo_like_pure_component from './AS_40_use_Memo_like_pure_component';
import AS_41_Ref_in_class from './AS_41_Ref_in_class';
import AS_42_useRef_function from './AS_42_useRef_function';


import AS_43_forwordRef_parent from './AS_43_forwordRef_parent';
import AS_44_controlled_component from './AS_44_controlled_component';
import AS_45_uncontrole_by_ref_and_get_element from './AS_45_uncontrole_by_ref_and_get_element';
import AS_46_High_order_component from './AS_46_High_order_component';
import AS_47_Routing from './AS_47_Routin';
import AS_49_parents from './AS_49_Parent';
import AS_51_fetch_api from './AS_51_fetch_api';
import AS_51_fetch_api_from_database from './AS_51_fetch_api_from_database';



import AS_53_post_api from './AS_53_post_api';
import AS_54_delete_api from './AS_54_delete_api';
import AS_55_Pre_filled_form_data from './AS_55_pre_filled_form_data';
import AS_56_update_api from './AS_56_update_api';
import AS_57_pre_value_of_state from './AS_57_pre_value_of_state';
import AS_58_last_props_parent from './AS_58_last_props_parents';
import AS_58_object_in_useState from './AS_58_object_in_useState';
import AS_50_dynamic_routing_parent from './AS_50_dynamic_routing_parent';
// import As_20
function List() {
    const [name, changeName] = useState("ganesh");
    const [className, changeprops] = useState("ganesh");
    return (
        <>
            {/* 13_class pass props */}
            {/* <div>
                <Props_function name={name}></Props_function>
                <button onClick={() => { changeName("raj") }}>click me to change name </button>
                <Props_class name={className}> </Props_class>
                <button onClick={() => { changeprops("Bodakhe") }}> click me</button>
            </div> */}


            {/* 14_take value from input box and print it */}
            {/* <AS_14_input_val_print></AS_14_input_val_print> */}

            {/* 15_show and hide element buttons */}
            {/* <AS_15_show_hide_toggle></AS_15_show_hide_toggle> */}

            {/*17_form handling */}
            {/* <AS_17_Form_handling></AS_17_Form_handling> */}

            {/* 18 coditional statement */}
            {/* <AS_18_Conditional_login_by_tarnary_operator></AS_18_Conditional_login_by_tarnary_operator> */}

            {/* 19 Form validation */}
            {/* <AS_19_form_validation></AS_19_form_validation> */}


            {/* 20 function as props */}
            {/* <AS_20_function_as_props_parent></AS_20_function_as_props_parent> */}


            {/* component's life cycle of class */}

            {/* constructor  */}
            {/* <AS_22_class_life_cycle_Constructor name="ganesh"></AS_22_class_life_cycle_Constructor> */}

            {/* render  */}
            {/* <AS_23_class_life_cycle_render></AS_23_class_life_cycle_render> */}

            {/* componentDidMount */}
            {/* <AS_24_class_life_cycle_componentDidMount></AS_24_class_life_cycle_componentDidMount> */}

            {/* componentDidUpdate */}
            {/* <AS_25_class_life_cycle_componentDidUpdate></AS_25_class_life_cycle_componentDidUpdate> */}


            {/*shouldComponenupdate*/}
            {/* <AS_26_class_life_cycle_shouldComponentUpdate></AS_26_class_life_cycle_shouldComponentUpdate> */}


            {/* componentwillUnmount */}
            {/* when we remove the component then it is automaticaly distroyed */}
            {/* <As_27_class_life_cycle_componentWillUnmount_parent></As_27_class_life_cycle_componentWillUnmount_parent> */}

            {/* Hooks */}
            {/* useEffect */}
            {/* <AS_29_hooks_useEffect></AS_29_hooks_useEffect> */}

            {/* useEffect with conditional state update specific useEffect call */}
            {/* <AS_30_Hooks_useEffect_conditional></AS_30_Hooks_useEffect_conditional> */}

            {/* useEffect with change in props and coditional useEffect */}
            {/* <AS_30_useEffect_conditional_props_change_parent></AS_30_useEffect_conditional_props_change_parent> */}

            {/* css type */}
            {/* <AS_31_css_type></AS_31_css_type> */}

            {/* Bootstrap css */}
            {/* <AS_32_react_bootstrap></AS_32_react_bootstrap> */}

            {/* map function with list and boject */}
            {/* <AS_33_map_with_array_and_object></AS_33_map_with_array_and_object> */}


            {/* map netsed table */}
            {/* <AS_35_nested_table_with_map></AS_35_nested_table_with_map> */}

            {/* reusable component by passing list pros in the component */}
            {/* <AS_36_componet_reuse_by_list_props_parent></AS_36_componet_reuse_by_list_props_parent> */}

            {/* fragment to wrap the element */}
            {/* <AS_37_React_fragment_parent></AS_37_React_fragment_parent> */}

            {/* lifting up or transfer data from child to parent componet */}
            {/* <AS_38_lifting_up_data_transfer_from_child_to_parent_parent></AS_38_lifting_up_data_transfer_from_child_to_parent_parent> */}


            {/* PureComponent to stop rerendaring if state not change */}
            {/* <AS_39_for_class_pure_component_parent></AS_39_for_class_pure_component_parent> */}

            {/* useMemo hook as pure commponent */}
            {/* <AS_40_use_Memo_like_pure_component></AS_40_use_Memo_like_pure_component> */}

            {/* Ref is use for Dom manipulation please not use too much it only when it is nessesor 
              speed of app get affected  ,dom can manipulate by this */}
            {/* <AS_41_Ref_in_class></AS_41_Ref_in_class> */}

            {/* useRef use as a Ref but use in functio  */}
            {/* <AS_42_useRef_function></AS_42_useRef_function> */}

            {/* forwordRef is the advance of ref and use when two differenct compunent present then trensfor info of change of onfo use forwordRef */}
            {/* <AS_43_forwordRef_parent></AS_43_forwordRef_parent> */}

            {/*  Controlled component used in form to control input fields */}
            {/* <AS_44_controlled_component></AS_44_controlled_component> */}

            {/* uncontrolled component in that no use of state*/}
            {/* without state controll directly by dom hance called as uncontrole */}
            {/* <AS_45_uncontrole_by_ref_and_get_element></AS_45_uncontrole_by_ref_and_get_element> */}


            {/* higher order component (HOC) this take props as component and return modified component */}
            {/* <AS_46_High_order_component></AS_46_High_order_component> */}

            {/* Routing */}
            {/* <AS_47_Routing></AS_47_Routing> */}
            
            {/* routing and 404 page not found */}
              {/* <AS_49_parents></AS_49_parents> */}
         
         
              {/* Dynamic Routing */}
              {/* <AS_50_dynamic_routing_parent></AS_50_dynamic_routing_parent> */}
         
            {/* Fetch API in by Get Method */}
            {/* <AS_51_fetch_api></AS_51_fetch_api> */}

            {/* Fect api from database have to start not from vedio */}
            {/* C:\Users\91935\Documents\Vs code\Node js\Node Js\41_post_get_delete_put_api_mongoose */}
            {/* <AS_51_fetch_api_from_database></AS_51_fetch_api_from_database> */}

            {/* put api from app to database */}
            {/* <AS_53_post_api></AS_53_post_api> */}

            {/* delete api data  */}
            {/* <AS_54_delete_api></AS_54_delete_api> */}

            {/* fill the form field by the api data when click on update button */}
            {/* <AS_55_Pre_filled_form_data></AS_55_Pre_filled_form_data> */}

            {/* update data from from */}
            {/* <AS_56_update_api></AS_56_update_api> */}

            {/* find previous state from setstate(function) */}
            {/* <AS_57_pre_value_of_state></AS_57_pre_value_of_state> */}

              {/* last props  get in child component*/}
              {/* <AS_58_last_props_parent></AS_58_last_props_parent> */}

              {/* object (list of data) present in useState and update this  data */}
              {/* <AS_58_object_in_useState></AS_58_object_in_useState> */}
            </>


    )

}

export default List;