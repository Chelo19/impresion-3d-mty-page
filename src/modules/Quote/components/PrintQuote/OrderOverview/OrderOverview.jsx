import { forwardRef, useContext } from "react";
import { QuoteContext } from "../../../context/QuoteContext";
import ContactForm from "../ContactForm/ContactForm";
import "./OrderOverview.css";

const OrderOverview = forwardRef((props, ref) => {
    const { formData, setFormData } = useContext(QuoteContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <div className="order-overview">
            <div className="order-overview-container">
                <ContactForm
                    formData={formData}
                    handleChange={handleChange}
                />
            </div>
        </div>
    );
});

export default OrderOverview;