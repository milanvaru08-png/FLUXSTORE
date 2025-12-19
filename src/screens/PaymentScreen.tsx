import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

const PaymentScreen = ({ navigation }: any) => {
  const { cart, clearCart } = useCart();
  const [method, setMethod] = useState("card");
const { addOrder } = useOrders();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Check out</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.step}>STEP 2</Text>
        <Text style={styles.heading}>Payment</Text>

        {/* PAYMENT METHOD */}
        <View style={styles.methodRow}>
          <TouchableOpacity
            style={[
              styles.methodCard,
              method === "cash" && styles.activeMethod,
            ]}
            onPress={() => setMethod("cash")}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2331/2331941.png",
              }}
              style={styles.methodIcon}
            />
            <Text style={styles.methodText}>Cash</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.methodCard,
              method === "card" && styles.activeMethod,
            ]}
            onPress={() => setMethod("card")}
          >
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/633/633611.png",
              }}
              style={styles.methodIcon}
            />
            <Text style={styles.methodText}>Credit Card</Text>
          </TouchableOpacity>

          <View style={styles.methodCard}>
            <Text style={styles.more}>•••</Text>
          </View>
        </View>

        {/* CARD */}
        <Text style={styles.choose}>Choose your card</Text>
        
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={styles.cardImage}
        />
<Text style={styles.addNew}>Add new+</Text>

        {/* WALLET */}
        <Text style={styles.walletText}>or check out with</Text>
        <View style={styles.walletRow}>
          <Image
            source={{
              uri: "data:image/png;base64,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",
            }}
            style={styles.walletIcon}
          />
          <Image
            source={{
              uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYsAAACACAMAAADNjrXOAAAA81BMVEX///8AV5/6phoAVZ4AU50ASZkAS5oiY6VOf7QATpsAUJwAVJ4AR5j6pA/7uVkAT5u9zN9Ed68FXqMARJf6oQD0+PvO2+kAWqH6nwDp8Pbf6PHI1ub/qgAAVKKTrs7Y4+6Kp8qettMAUaW5yt91l8Fgiblpj7yCocYua6n//fmnvdc8cq3w9fr937n8zpIqaKj+69LGk0Y3YpDwox//+O37vGD7w3T+6s/7skD+8eBYhLf7rzv92ar7v2v8y4r81J/Z0sbYlSeJe29rcnwiXZajhl9mcH/kni3IlEVPaYmRf2qzjFXWmTpZa4W5jlFCZY2Te10CpqXLAAAR/0lEQVR4nO1daXcaRxYF9yJ100SsQqBIAoRAlohlTxyPoyzO7sxMJpn//2sGhEC9vLr3VRU6mXMy93N3dXUtb72vqlb7S2J53JqMZ/ft64POoD4YHFy3r2bjSeui/2d37K+Fi5tZu9GN4iQNwyAI6msEQSNM0ySOuvXD2eXoz+raZ5/Y44t3r77+0vF740OC22H+8Tl5eGn18YvJ4SCL080EyAjTOBscTi4cf2+FYWsyu7o39bgNWv6m13RAr3fSfPd3l55GIcZR2+bxzOLLx4tOlIRgGnITkkT1+aXL7w3HB/HDljMhujG//L7Xa75wQvPkvf3muIzJMESt/OOjDD4c3KrH6HwQwf1QwWp/3Ld4wwX0592EfCSdgffffvbuxYnbfDRPvrbsbO2QLMygXnj8FE8d/LF8M/cZGyMJYRRZKfPT9Ii2GRyQRl6/+sptOmwnY8i2RXJeeP48wU9PNB+9vM50oqk6cLHNz11mmvnu8un98sNqOhwm47VNb9nYrkRUQXPXZil8Oj7ln2xdRw314Jegl4HrD6mmoh4daxr78tUL683R/Mqit7XaHRmW8Kr4/DV+PhvKn3nC6DBzngm9DFxjqJSCur28wut3tqr85DN9d2sXWBWvFk1poZPnQ/bBc1fpZDluKxziLfzU5yve1iNefv3+xGY2mu/13a0tSH/Lim2I56JBRMjomqknAo0MfMQpW2a7f+xYDFjt9Tc2muPkrb5ltkhLmpuaUXP4tZvYa1Os0KUycAciTfM/qW90jbff9tSz0dObUi2yTIO45EZPfMyomU6XIlAZuMNxpG7UYrNt8PLDC+VsNN+pG2XORVoWpcyMQr5Y21M+rRC2QftFXOm3YHnza6CcDb0lteySXmZlc+8Wr+zIHMXr3zHrWQG9GTWM9XswPNS2mscHlaTqvVQ2RySO4JKS5xtGt6l/p7RqIPRmFPWb8t22Ut47vHylmI2e1t1j6i0u//oQ/2Hj2vypfUwFloEFDGxUU2SnvHd4+476G1rlfUHUW5CUlzlRiGZLvc3jQhpwV/IRl3rNvULsFAFe47vvPyVzoVTeC7KPq9L5hphRJiU481fbG2gjg20r4/lorGy2gn73hxdwa2iVN9vHWSXLQlxD0/q6ZDaCEsyV3GFk90E35f2A9rTzBm6Npkp5t8g+FqQ/sYEjOUVGtIwexJV8AjG9K9C7LWWcJ8H0x8/B1jhRpZSYBR5XE14HcCcFqSxCmBejhtaM6keWTmXmnFFfa9Czwe/mraFS3qzDQVp5ZYkXuME2vNEGhii0ZhSz1asNOyvv2noQV1ujadoavW8VjdwQfSr4VcyMuhc/VPeOfGwBXMkC8PYVkC50DQu4f9j0Zz/9ZtgaqlAtcy661R8nuXHZHLHyutZsnDUvRxxM4EoWcGpl0K4BHCOGR9MymP5smgyuvJmpIWXQiBEsKJgVlMGIIEziKAkGnTXqYZKtyRulR+50w3Nvr5+6upalcdxO/PQXWU4plPeYeF+SCCU/KZpROtmdRp2rSWs03C78/nDUupm1B1k+yq5M+tAUvoCq+a5GZ7vWzn76KG2NHs/tMeeiIbxD5LCYxO/wbREk4cIwFqObeSPaGqjKeCpbZRISQJIimO/s50bjV2EyuPJmMvVI0GZ95pA4fGeFMMZjfLwIsgcmldLacUmn2+TRS8gpUVFpND9hLcyJNySZLCR+JXqv3OuKD7lGPp0nSWByJc1jowclSZkxzI/K9IfqZPRIA31C2RPHlfylaBjSeGmsW5H9yUGkU7D63GoOQWLHA86jIIWnv1Qmgylv5lyIXhURxJIZxULB9SNtWKNWa6mSepTZIkNHkhJRDNKd/aM8GUx5kzhmibj5iDkxo4TfYc6Fh2wwgAlfA2zIPiWUSANnfytFbonyJtQag9fGzChhmzNT3yP4IGPpQtOtW5GkyuiXBrM8GcTzZstVpr4Q73AgvMIsWsn08gJyZ1BffDZomQRQngysvIlGleP5hO4vcTTKS0b3IR+AvRvAv44d86w1QY+uJkOtvI/JEJWJmxsQMpVkojPV7WHWy0DuTDJBqkSfSq+gOpxnf+QVOFTeRL8ZYt+M7i+YUYwL5yGlZYBUSRBChXfkQJLaovrRs3/nJqP3yvxqn+g3Q6yBzKDEvmN+VyDpGA8gMZrOoSVhCPirILQ7/fFpMpDnTUYoMPBLSXmAxNGggUFr+iQGCiSvBC/a2T7LQvrN6T9zO8P8Ksl5VoibjwjxbhoIoQyauwhtals4UKoyJMExNd+nCtG/nP5rNxk9o/JmMWVZc9dG+DWRo8HzSPHYeQSqQNGEdYQGVsf4uDqihTb9bWvZmpU3GSCTpe1C91ckLzJ3h7cCJEUfMhRIeSfueVZZlQaDz6nyJnLfFA1wofuzsNfDIHkYMEWgdPwmJ4jMDwsOu/I/d6Epo/JmwbPMEMJ2ofszm3bz5r4MWzTSG9sQeuWR+5dH8ip4iqAb3iNjauSDudD9dUHTdLAXawrS/Dfdg0QWjzyrKdYzfbNRGaZSMeJcGHs0gK8FobiddJG6oDt3Tx/sgPTgVgChtSFTJ3QwLPCg/jlS3sS5MLJTiPVl4Gi0lVHTNPRX4SjctB1npCt9AjImYfyoMgzKmzgXxsVBEtcG0abnAcQdz/A5ogfv6g6RgPYgSdX6phj2xstofiG9tCTROlnU1Fzp/iwKmUMQXXupDZQe2wU4kGFXLTexgDGzG340Km9imZr3qWPVpA2dspG13TOdkHu36x0MHHvkWc0CYBMlFJU3ycybqRZudH8rBudqEWWHruOB1kqQ7B5DURIPkhQQ4dPfV7ZUTzjaiyQUwNEnJENn4mgsLepJ1wijQyfTEsaecwwVZJmryzusvh/UDcqbMWKN+pNk6MyloDNbFt9qbzjMBvTwc3Y63D5Kvq4Is9w4W3l8kvLGydXcXi7DuWrSui5l1Vh3bh0zRcZqIzfGyKT3IUkhRTz92HzRrLxAysJAeIxElkD14cSBx5dGlkEqeBBLPlQGk/aGCLUKIMTQWKnvqvImZWFCycUWjlWTa1w7lIgF8YHVuMAfK5Rvo13qQZKCcYnpr82K8iZCH0UqXej+jxhZqu8NGpmFJoV8ryLZBLohPlFKsBwaf3za+1B6nAiaCFAhcDTKGNx9wKUbrfJooLZvoXtf3LPIevFiMaLBnb759JvS49i5QBlfo4+v+omFddHWplV1agNu2mIoAcbjPPKsMO+52hglz9sQZd8iGZs/RILfjERx5XjuQaQjZ8DxLXkNcBA8SFLYRp2+6RWVNwnUoSpRF7p/HveO5fZHB5qVClMrZeMISVv3wyhqJO74R0l5Y+cCrm1G96cxVtedEaa8jhhu2gplHipvH04pXK/T7wvKm0S9keZmxrAiqjZzrLhvpNQLh2HLylKHy6p6voAe8GS0xi8Fzxvz/jBXi0SjyscSSpg4TkaQkJ2xhDVWFZ8J5uDdD6OoEVLH2cfck4S5CYtEybu6g8lOHU/hbDTwTMM0QDXaOYTK2yehBYN9Z//JKW/iXGToh4kFphSzy1s3pRHimB1MkQh5SrR6PQ6jIEog+CmnvHFZGHY5fc2oLcZu52cnyAXHIyCE+1AIweq89DL6MMAQfbd7cIi9tQyGfxzo/jIu7py2RgZEB0xySUsMMpzNkWoF4HLPpUzxcBLHmZlRFnG8866L1jCnovEak4xDSEbV1ZCb/g1qridJi50LEqEkmVmr+qrhoX1GA6TcoMIUjUNoe/qQpAjTYhezw7kgkkXps8Gz6/Lptf1sdE3rFRrqsiJDBrpf1Rr8hZ0Thp0Lkund2yVJW1x2bOPopqgAtg5liYPq1H1IUiSzsJU9fSykK2dlF+FQNclwU7ecDUO0DEpPgxaEDGcjQUz1V0hgbhc8NkobJOnudbq/sd92syHnf7GENnQMlyd5kKRwvdDWI8bsJqawHKomNZgMLAxcOUaDe2bwX/vosz4kKWIhbc7XwsRkWnlwS6omnYM4k1AfS5cMZ8y+MoYDkGDzIUmRtbFR3ti5oPKeyBKPIpL+Qn1/kpRbwP9lDC6hEfMiSWFdsBGZmNXKikDYJUlevR+1lfHbQGBGkIyM6ZtQxWpizkZAz/Nhy+EMKTVJ93TXpAk35fM2DahuP0z3MvcLjocPSQqv+gezDnPEqavJzCjf4sel7vaeqlrC4U5zgquPStX9fgfxyB48apJ9YBa1zyVJyj/QyKmKuYZdUCT4kTHid0YJdMVWqwM7FzzgTQ5h88qFPWKiuCShsn/JGtkcOywC8Q/8ziiBZ5WulDd2LvhQknMiPcyoJ0w4haosPPrsNLvACPiaxR1+AtDCTec4xcFLzMltY34RnB34OYFlo1ZTyO8CP5l7DqgNwS2utOMZXkb393KOdujTjF95LpwOP1XAiySFR2vQgV/mLBRSNelzCFYetOS1JKMsyjLt4HfwHl9TRigWgQfd3wbkHJ5KpM/iYkk7+OVZPW7BUbB5mRnlk5XMg52RUJx0dqyrB7RXnsiwvpRmC81+xJvOqyq6AFJWUPIvxvu6EEv4kNdOp0dVmwCJmxssnQ6fcADLZhSTdM8loeqeJCm+pgzQEP7Y6f4eZyYWALMKa2T5p51O81dCfY2fDNdTvBU2kHvVpB1IBLK0bm6fcV9o72UywNHv0VwK63K6v4s6Z8upECdyFsoqeJGkGCvQAJV8ITaaZEadd6+s/4ZWWBZMWtuLJe3gRZJSXUtUhSpUz+6aFFIv8zTsti3TAFTo5CednXbsCc+MjMtCUVH1cXWD3Ma6ECGMDiYWYndOTdR8+NSlft8CniE21SmLJai4NKxqUnJQNqs2iMOZluByT7tf4ARYXyxpB0+fid1uIH0x0mR2Hej+T9GMNLo7V5gHpx2+q/OekP3FkpbwIknRYzIF6NgnKAZcl+lEees0SLrX51iRH7czxR18eRG1t4uPTfA6jMLlhj/dMWIOVZOliEwjyQZXN8fyth9N7lSsnLwb42Y02sCPJGW/b5UKyoHuL9gRYRIld/eLyeXpaDhcLvv9/nI4ak2uDqJEF2POxzAXDhdL2sHzSi3IbZCgM6LJRXzCJd8mcRkEYZrEcRQladhoNMI4ixN1nwsL9XkV9wOke7gsYClElbaCwyVJNDimyDmXkc9BP2coagvPezks4+ZKf4bR/QUzyuWeYIIk31l7K8Xhg37JSssQjTIFxKomBYNj/xZnkKdwPW8o6hG+0Werj2ldSwe6P8mPO6BQxspiiGmsBK7U8psLqwSwNvxFzCgpRUvy4/ZI8hHaJan1Oxq3lBijfvqcJFWzjJtr5x1HT0Uzat+eWKNA5GOHD2dCj2RAs8STmEpMngK0aUSXqsk9B4uComaDN3nasWGR4vFNkZFu5qHlwDrQ/SGj1AHdAhOAnOqqSeDvAE+S8rixZw193Fz9JYeqyT1zyEp3W1EBaDFeULEFFg0J0DtBataJA91/v65Y6fhHcmCPHYUD9tSPJFVb6lektkkXM2qPJm3QLW08ZqNZZaqx8vakQ2rZvkfq1UNymdL12+z6dAsE5fNxGFnVkqyFmvIkSamXpLrCgIQzRCLR/syoNCivcma2W4YukPLxOkmqpo4+6G0El7sm96W6g+iwEr1kGz+2E/Io5+N3GAUNcG+ht/scqib3FS4K46qNxkw025t2cXGdJ2ebUMI3sChIc6D778eMCrK2IEdZlMeW1wSPgfQ7jEJ5O5GFUHWomrTP9QqI65IVQ4rVtgduWOD5TpKi5VwbaIibjyDXyEi8U9fTsnPNxoGc+mcrzT7QjWw+7zpExa9aRGyG5HZpyYI8vdemsA3dizomEgaL8djEPzaAswvvkVBAYdxbnLHAqibldTg8v+smbk5GkHQPjQNKNZHx/A8j8DGQfiQpRR5Hd8byY2uE7m9UPKPJbTdOG1aeRtBIsg5itjHDxEHAQ//JV3mPuiGBYCoasUjM5eorRChM0G8t7pIoCVUkg6CRxgnhtF1ksDNB4EL2G4Tm9hJP5V1rM9xasE3uOwcIA2aBL08nV6sJiY9CswYJwjSO0ttFi/VrgTtzcODiKM9Ro56e9/8glheX46vbQZZFcZIkabrZnmmaHiVxlEUH94ubi32VX/4fOoyOTy8n54vFbH51NZ/PFuPJTevYL6v83Pgvgh5x995OtvkAAAAASUVORK5CYII=",
            }}
            style={styles.walletIcon}
          />
          <Image
            source={{
              uri: "data:image/png;base64,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",
            }}
            style={styles.walletIcon}
          />
          <Image
            source={{
              uri: "data:image/png;base64,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",
            }}
            style={styles.walletIcon}
          />
        </View>

        {/* SUMMARY */}
        <View style={styles.summary}>
          <View style={styles.row}>
            <Text>Product price</Text>
            <Text>${subtotal}</Text>
          </View>

          <View style={styles.row}>
            <Text>Shipping</Text>
            <Text>Freeship</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.total}>Subtotal</Text>
            <Text style={styles.total}>${subtotal}</Text>
          </View>

          <View style={styles.checkboxRow}>
            <Text style={styles.check}>✔</Text>
            <Text>I agree to </Text>
            <Text style={styles.link}>Terms and conditions</Text>
          </View>
<TouchableOpacity
  style={styles.placeBtn}
  onPress={() => {
    const newOrder = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      items: cart,
      subtotal,
      status: "Pending",
    };

    addOrder(newOrder);   // ✅ Save order
    clearCart();          // ✅ Clear cart
    navigation.navigate("SuccessScreen"); // ✅ Navigate to SuccessScreen
  }}
>
  <Text style={styles.placeText}>Place my order</Text>
</TouchableOpacity>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  back: { fontSize: 26 },
  title: { flex: 1, textAlign: "center", fontSize: 18, fontWeight: "600" },

  container: { padding: 16, paddingBottom: 40 },

  step: { color: "#999", fontSize: 12 },
  heading: { fontSize: 22, fontWeight: "700", marginVertical: 12 },

  methodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 14,
  },

  methodCard: {
    width: "30%",
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
  },

  activeMethod: { backgroundColor: "#333" },

  methodIcon: { width: 26, height: 26, marginBottom: 6 },

  methodText: { fontSize: 12, color: "#000" },

  more: { fontSize: 20 },

  choose: { fontSize: 16, fontWeight: "600", marginTop: 16 },
  addNew: { color: "red", position: "absolute", right: 16, top: 250 },

  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 16,
  },

  walletText: { textAlign: "center", marginVertical: 10 },

  walletRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  walletIcon: {
    width: 50,
    height: 30,
    resizeMode: "contain",
  },

  summary: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  total: { fontWeight: "700", fontSize: 16 },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },

  check: {
    width: 18,
    height: 18,
    backgroundColor: "#4CAF50",
    color: "#fff",
    textAlign: "center",
    marginRight: 8,
  },

  link: { color: "#4CAF50" },

  placeBtn: {
    backgroundColor: "#2F2F2F",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  placeText: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
