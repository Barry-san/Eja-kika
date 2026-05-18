import { useForm } from "react-hook-form";
import { Input } from "../../components/form/input";
import { FormGroup } from "../../components/form/wrapper";
import { PageHeader, ScrollingTicker } from "../../components/ui/PageHeader";
import { ContactCard } from "./components/Card";
import { location, phone, whatsapp } from "../../icons";
import { useTextAnimations } from "../../animation";

const REQUIRED_FIELD_ERROR = "Please fill out this field";

export default function ContactPage() {
  type ContactForm = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  const { register, formState } = useForm<ContactForm>();
  const { errors } = formState;

  useTextAnimations();
  return (
    <div className="h-full">
      <PageHeader title="Contact us" />
      <ScrollingTicker />
      <div className="w-full flex flex-wrap items-between p-5 gap-5 md:p-10 justify-center">
        <ContactCard
          title="Phone"
          icon={phone}
          content={<a href="tel:+16476790341">+1 (647) 679 0341</a>}
        />
        <ContactCard
          title="Pickup / Delivery"
          icon={location}
          content={<p>Brantford, Ontario.</p>}
        />
        <ContactCard
          title="Whatsapp"
          icon={whatsapp}
          content={<a href="tel:+16476790341">+1 (647) 679 0341</a>}
        />
      </div>

      <div className="mx-auto max-w-7xl rounded-2xl p-6">
        {/* <!-- Contact Us Form Start --> */}
        <div className="grid grid-rows-2 lg:grid-cols-2 justify-center rounded-2xl">
          {/* <!-- Google Map Iframe Start --> */}
          <div className="order-2 md:order-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46575.177658550725!2d-80.2740655!3d43.14760855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c65e278ea730f%3A0x353da5a5a466f9e0!2sBrantford%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sng!4v1776816355615!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grow h-full w-full"
            ></iframe>
          </div>
          {/* <!-- Google Map Iframe End --> */}

          {/* <!-- Contact Form Start --> */}
          <div className="flex flex-col bg-primary text-white p-5 md:p-10 gap-5">
            {/* <!-- Section Title Start --> */}
            <div className="section-title">
              <h2
                className="text-[24px] md:text-[32px] lg:text-[46px] font-bold leading-[1.2em] tracking-tight text-anime"
                data-cursor="-opaque"
              >
                Request pricing and availability for Eja Kika
              </h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- Contact Form Start --> */}
            <form
              id="contactForm"
              action="#"
              method="POST"
              data-toggle="validator"
              className="wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="row grid md:grid-cols-2 gap-5">
                <FormGroup error={errors.firstName?.message}>
                  <Input
                    type="text"
                    name="fname"
                    id="firstName"
                    placeholder="First name"
                    required
                    registration={register("firstName", {
                      required: REQUIRED_FIELD_ERROR,
                    })}
                  />
                </FormGroup>

                <FormGroup error={errors.lastName?.message}>
                  <Input
                    type="text"
                    name="lastName"
                    id="lname"
                    placeholder="Last name"
                    registration={register("lastName", {
                      required: REQUIRED_FIELD_ERROR,
                    })}
                    required
                  />
                </FormGroup>

                <FormGroup error={errors.email?.message}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    registration={register("email", {
                      required: REQUIRED_FIELD_ERROR,
                    })}
                    required
                  />
                  <div className="help-block with-errors"></div>
                </FormGroup>

                <FormGroup error={errors.phone?.message}>
                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    registration={register("phone", {
                      required: REQUIRED_FIELD_ERROR,
                    })}
                    required
                  />
                </FormGroup>

                <FormGroup
                  className="md:col-span-2"
                  error={errors.message?.message}
                >
                  <textarea
                    className="p-5 w-full rounded bg-divider"
                    id="message"
                    rows={4}
                    placeholder="Tell us your quantity and pack size..."
                    {...register("message")}
                  ></textarea>
                </FormGroup>

                <div className="col-lg-12 md:col-span-2 bg-accent rounded-lg">
                  <div className="contact-form-btn">
                    <button
                      type="submit"
                      className="p-4 flex items-center justify-center w-full rounded-lg"
                    >
                      <span className="">Request Pricing</span>
                    </button>
                    <div id="msgSubmit" className="h3 hidden"></div>
                  </div>
                </div>
              </div>
            </form>
            {/* <!-- Contact Form End --> */}
          </div>
          {/* <!-- Contact Form End --> */}
        </div>
        {/* <!-- Contact Us Form End --> */}
      </div>
    </div>
  );
}
